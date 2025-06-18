# 🤝 Contributing to Portfolio Template

Thank you for your interest in contributing to the Portfolio Template! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Code Style Guidelines](#code-style-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 How Can I Contribute?

### Reporting Bugs

- Use the GitHub issue tracker
- Include detailed steps to reproduce the bug
- Provide screenshots if applicable
- Mention your browser and OS version

### Suggesting Enhancements

- Use the GitHub issue tracker
- Describe the enhancement clearly
- Explain why this enhancement would be useful
- Include mockups or examples if possible

### Pull Requests

- Fork the repository
- Create a feature branch
- Make your changes
- Test thoroughly
- Submit a pull request

## 🛠️ Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or bun
- Git

### Setup Steps

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/sribatsa_portfolio_templet.git
   cd sribatsa_portfolio_templet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Run tests (if available)**
   ```bash
   npm test
   ```

5. **Run linting**
   ```bash
   npm run lint
   ```

## 🔄 Pull Request Process

### Before Submitting

1. **Ensure your code follows the style guidelines**
2. **Test your changes thoroughly**
3. **Update documentation if needed**
4. **Add tests for new features**

### Pull Request Guidelines

1. **Use a clear and descriptive title**
2. **Provide a detailed description of changes**
3. **Include screenshots for UI changes**
4. **Reference any related issues**
5. **Ensure all tests pass**

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested locally
- [ ] All tests pass
- [ ] No console errors

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
## Bug Description
Clear and concise description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Environment
- OS: [e.g. Windows 10, macOS 12]
- Browser: [e.g. Chrome 120, Firefox 115]
- Version: [e.g. 1.0.0]

## Additional Context
Any other context about the problem
```

## 💡 Suggesting Enhancements

### Enhancement Request Template

```markdown
## Enhancement Description
Clear and concise description of the enhancement

## Problem Statement
What problem does this solve?

## Proposed Solution
Describe the proposed solution

## Alternatives Considered
Any alternative solutions you've considered

## Additional Context
Any other context or screenshots
```

## 📝 Code Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Use const/let instead of var

### React Components

- Use functional components with hooks
- Follow naming convention: PascalCase
- Keep components focused and single-purpose
- Use proper TypeScript interfaces
- Implement proper error boundaries

### CSS/Styling

- Use Tailwind CSS classes
- Follow BEM methodology for custom CSS
- Use CSS variables for theming
- Ensure responsive design
- Maintain accessibility standards

### File Organization

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── [feature]/      # Feature-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles
```

### Commit Messages

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

Examples:
```
feat(contact): add email validation
fix(header): resolve mobile navigation issue
docs(readme): update installation instructions
```

## 🧪 Testing Guidelines

### Component Testing

- Test component rendering
- Test user interactions
- Test error states
- Test accessibility features

### Integration Testing

- Test component interactions
- Test API integrations
- Test form submissions
- Test navigation flows

### Performance Testing

- Test bundle size impact
- Test loading performance
- Test animation performance
- Test mobile performance

## 📚 Documentation

### Code Documentation

- Document complex functions
- Add inline comments for tricky logic
- Update README for new features
- Maintain API documentation

### User Documentation

- Update setup instructions
- Add troubleshooting guides
- Include usage examples
- Maintain changelog

## 🎯 Review Process

### What We Look For

- Code quality and readability
- Performance implications
- Security considerations
- Accessibility compliance
- Browser compatibility
- Mobile responsiveness

### Review Timeline

- Initial review within 48 hours
- Follow-up reviews as needed
- Merge within 1 week for approved PRs

## 🏆 Recognition

Contributors will be recognized in:

- README contributors section
- Release notes
- GitHub contributors page
- Project documentation

## 📞 Getting Help

If you need help:

- Check existing issues and discussions
- Join our community chat (if available)
- Contact maintainers directly
- Review documentation

## 🙏 Thank You

Thank you for contributing to the Portfolio Template! Your contributions help make this project better for everyone.

---

**Remember**: Every contribution, no matter how small, is valuable and appreciated! 