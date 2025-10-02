---
name: Automated Test Failure
about: Report an automated test failure from the CI/CD pipeline
title: '🚨 Appium Test Failure: [TEST_NAME] on [DEVICE]'
labels: ['bug', 'appium', 'automated-test']
assignees: ['michal.buczko']

---

## 🚨 Automated Test Failure Report

**Test**: \`[TEST_NAME]\`
**Device**: [DEVICE]
**Timestamp**: [TIMESTAMP]
**Environment**: Appium CI/CD Pipeline

### Error Details
\`\`\`
[ERROR_MESSAGE]
[ERROR_STACK]
\`\`\`

### Test Environment
- **Appium Version**: [APPIUM_VERSION]
- **XCUITest Driver**: [DRIVER_VERSION]
- **iOS Version**: [IOS_VERSION]
- **Device**: [DEVICE]
- **Test Suite**: [TEST_SUITE]

### Steps to Reproduce
1. Run Appium test: \`[TEST_NAME]\` in suite \`[TEST_SUITE]\`
2. Test will fail with the error shown above
3. Check attached artifacts for additional context

### Artifacts Available
- 📸 **Screenshots**: Available in test artifacts
- 📋 **Test Logs**: Available in test artifacts
- 🔍 **Full Test Results**: Available in GitHub Actions artifacts
- 📊 **Analytics Reports**: Available in analytics artifacts

### Labels Applied
- \`automated-test\` - This issue was created automatically by CI/CD
- \`[DEVICE]\` - Device-specific issue
- \`[TEST_SUITE]\` - Test suite category
- \`appium\` - Related to Appium testing infrastructure
- \`[SEVERITY]\` - Priority level based on failure impact

### Debugging Information
- **Workflow Run**: [View Run]([WORKFLOW_URL])
- **Branch**: [BRANCH]
- **Commit**: [COMMIT_SHA]
- **Triggered By**: [TRIGGER]

---
*This issue was automatically created by the Appium CI/CD pipeline. Please review the attached artifacts and test logs for detailed debugging information.*
