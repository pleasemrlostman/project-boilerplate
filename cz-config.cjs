module.exports = {
  types: [
    { value: "FEAT", name: "Feat:\tAdd a new feature" },
    { value: "MODIFY", name: "Fix:\tModify production, UI,UX code" },
    { value: "DOCS", name: "Docs:\tAdd or update documentation" },
    {
      value: "STYLE",
      name: "Style:\tAdd or update code format (not updation production, UI,UX code)",
    },
    {
      value: "REFACTOR",
      name: "Refactor:\tCode change that neither fixes a bug nor adds a feature",
    },
    {
      value: "TEST",
      name: "Test:\tCode change related with tests cases",
    },
    {
      value: "CHORE",
      name: "Chore:\tChanges to the build process or auxiliary tools\n\t\tand libraries such as documentation generation",
    },
    {
      value: "IMPROVEMENT",
      name: "IMPROVEMENT:\tMake minor improvements",
    },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  skipQuestions: ["body"],
  subjectLimit: 100,
};
