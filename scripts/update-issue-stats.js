// Issue Statistics Update Script
// Updates issue statistics and generates analytics reports

const fs = require('fs');
const path = require('path');

async function updateIssueStats() {
    console.log('📊 Updating issue statistics...');

    try {
        // This would normally use the GitHub API to fetch issue data
        // For now, we'll generate sample statistics

        const stats = {
            timestamp: new Date().toISOString(),
            totalIssues: 156,
            openIssues: 23,
            closedIssues: 133,
            byType: {
                'automated-test': 89,
                'bug': 45,
                'enhancement': 22
            },
            bySeverity: {
                'critical': 5,
                'high': 18,
                'medium': 45,
                'low': 88
            },
            byComponent: {
                'competition': 34,
                'tinkering': 28,
                'practice': 12,
                'gear': 15,
                'appium': 67
            },
            resolutionTime: {
                'critical': '4.2 hours',
                'high': '2.1 days',
                'medium': '5.3 days',
                'low': '12.1 days'
            },
            trends: {
                issuesCreatedLastWeek: 12,
                issuesResolvedLastWeek: 15,
                averageResolutionTime: '3.8 days',
                improvementRate: '+15%'
            }
        };

        // Save statistics
        const statsPath = path.join(process.cwd(), 'reports', 'issue-analytics.json');
        if (!fs.existsSync(path.dirname(statsPath))) {
            fs.mkdirSync(path.dirname(statsPath), { recursive: true });
        }

        fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));

        console.log('✅ Issue statistics updated:', statsPath);

        // Generate analytics report
        const report = generateAnalyticsReport(stats);
        const reportPath = path.join(process.cwd(), 'reports', 'analytics-report.md');
        fs.writeFileSync(reportPath, report);

        console.log('✅ Analytics report generated:', reportPath);

        return stats;

    } catch (error) {
        console.error('❌ Failed to update issue statistics:', error.message);
        throw error;
    }
}

function generateAnalyticsReport(stats) {
    return `# Issue Analytics Report

Generated: ${new Date().toISOString()}

## Overview
- **Total Issues**: ${stats.totalIssues}
- **Open Issues**: ${stats.openIssues}
- **Closed Issues**: ${stats.closedIssues}
- **Resolution Rate**: ${((stats.closedIssues / stats.totalIssues) * 100).toFixed(1)}%

## Issues by Type
${Object.entries(stats.byType).map(([type, count]) =>
    `- **${type}**: ${count} issues (${((count / stats.totalIssues) * 100).toFixed(1)}%)`
).join('\n')}

## Issues by Severity
${Object.entries(stats.bySeverity).map(([severity, count]) =>
    `- **${severity}**: ${count} issues (${((count / stats.totalIssues) * 100).toFixed(1)}%)`
).join('\n')}

## Issues by Component
${Object.entries(stats.byComponent).map(([component, count]) =>
    `- **${component}**: ${count} issues (${((count / stats.totalIssues) * 100).toFixed(1)}%)`
).join('\n')}

## Resolution Performance
${Object.entries(stats.resolutionTime).map(([severity, time]) =>
    `- **${severity} issues**: ${time} average resolution time`
).join('\n')}

## Trends
- **Issues Created (Last Week)**: ${stats.trends.issuesCreatedLastWeek}
- **Issues Resolved (Last Week)**: ${stats.trends.issuesResolvedLastWeek}
- **Average Resolution Time**: ${stats.trends.averageResolutionTime}
- **Improvement Rate**: ${stats.trends.improvementRate}

## Recommendations
- Focus on reducing ${Object.entries(stats.bySeverity).sort(([,a], [,b]) => b - a)[0][0]} priority issues
- Improve resolution time for ${Object.entries(stats.resolutionTime).sort(([,a], [,b]) => b.localeCompare(a))[0][0]} severity issues
- Monitor ${Object.entries(stats.byComponent).sort(([,a], [,b]) => b - a)[0][0]} component for recurring issues
`;
}

// Run if called directly
if (require.main === module) {
    updateIssueStats()
        .then(() => {
            console.log('🎉 Issue statistics update completed successfully');
            process.exit(0);
        })
        .catch(error => {
            console.error('❌ Issue statistics update failed:', error.message);
            process.exit(1);
        });
}

module.exports = { updateIssueStats, generateAnalyticsReport };
