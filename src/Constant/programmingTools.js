const programmingTools = [
    {
        name: "Visual Studio Code",
        description: "A free, open-source code editor from Microsoft with a rich ecosystem of extensions.",
        downloadLink: "https://code.visualstudio.com/Download",
        categories: ["IDE", "Code Editor"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Sublime Text",
        description: "A versatile and highly customizable text editor known for its speed and features.",
        downloadLink: "https://www.sublimetext.com/3",
        categories: ["Code Editor"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Atom",
        description: "A hackable text editor developed by GitHub, known for its flexibility and modern features.",
        downloadLink: "https://atom.io/",
        categories: ["Code Editor"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "IntelliJ IDEA",
        description: "A powerful IDE for Java development, with extensive support for other languages and frameworks.",
        downloadLink: "https://www.jetbrains.com/idea/download/",
        categories: ["IDE"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "PyCharm",
        description: "An IDE for Python development from JetBrains, featuring powerful debugging and code analysis.",
        downloadLink: "https://www.jetbrains.com/pycharm/download/",
        categories: ["IDE"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Eclipse",
        description: "An open-source IDE primarily for Java, but also supports other languages through plugins.",
        downloadLink: "https://www.eclipse.org/downloads/",
        categories: ["IDE"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "NetBeans",
        description: "An open-source IDE with support for Java, PHP, and other programming languages.",
        downloadLink: "https://netbeans.apache.org/download/index.html",
        categories: ["IDE"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Xcode",
        description: "Apple's IDE for macOS used to develop applications for iOS, macOS, watchOS, and tvOS.",
        downloadLink: "https://developer.apple.com/xcode/",
        categories: ["IDE"],
        platforms: ["macOS"],
    },
    {
        name: "Android Studio",
        description: "The official IDE for Android development, based on IntelliJ IDEA.",
        downloadLink: "https://developer.android.com/studio",
        categories: ["IDE"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Postman",
        description: "A powerful tool for testing and developing APIs.",
        downloadLink: "https://www.postman.com/downloads/",
        categories: ["API Testing"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Docker",
        description: "A platform for developing, shipping, and running applications in containers.",
        downloadLink: "https://www.docker.com/products/docker-desktop",
        categories: ["Containerization"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Git",
        description: "A distributed version control system for tracking changes in source code.",
        downloadLink: "https://git-scm.com/downloads",
        categories: ["Version Control"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "GitHub Desktop",
        description: "A user-friendly interface for managing GitHub repositories.",
        downloadLink: "https://desktop.github.com/",
        categories: ["Version Control"],
        platforms: ["Windows", "macOS"],
    },
    {
        name: "Jenkins",
        description: "An open-source automation server used for continuous integration and continuous delivery.",
        downloadLink: "https://www.jenkins.io/download/",
        categories: ["CI/CD"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Vagrant",
        description: "A tool for building and managing virtualized development environments.",
        downloadLink: "https://www.vagrantup.com/downloads",
        categories: ["Virtualization"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "VirtualBox",
        description: "A free and open-source hosted hypervisor for x86 virtualization.",
        downloadLink: "https://www.virtualbox.org/wiki/Downloads",
        categories: ["Virtualization"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "MySQL Workbench",
        description: "A unified visual tool for database architects, developers, and DBAs.",
        downloadLink: "https://dev.mysql.com/downloads/workbench/",
        categories: ["Database Management"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "pgAdmin",
        description: "The most popular and feature-rich open source administration and development platform for PostgreSQL.",
        downloadLink: "https://www.pgadmin.org/download/",
        categories: ["Database Management"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "DBeaver",
        description: "A free multi-platform database tool for developers, database administrators, and analysts.",
        downloadLink: "https://dbeaver.io/download/",
        categories: ["Database Management"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "JIRA",
        description: "A tool developed by Atlassian for issue and project tracking.",
        downloadLink: "https://www.atlassian.com/software/jira/download",
        categories: ["Project Management"],
        platforms: ["Web"],
    },
    {
        name: "Trello",
        description: "A collaboration tool that organizes projects into boards.",
        downloadLink: "https://trello.com/en/download",
        categories: ["Project Management"],
        platforms: ["Web", "Windows", "macOS", "iOS", "Android"],
    },
    {
        name: "Slack",
        description: "A messaging app for teams that makes it easy to communicate and collaborate.",
        downloadLink: "https://slack.com/downloads",
        categories: ["Communication"],
        platforms: ["Windows", "macOS", "Linux", "iOS", "Android"],
    },
    {
        name: "Zoom",
        description: "A video conferencing tool that provides video meetings, webinars, and screen sharing.",
        downloadLink: "https://zoom.us/download",
        categories: ["Communication"],
        platforms: ["Windows", "macOS", "Linux", "iOS", "Android"],
    },
    {
        name: "Notion",
        description: "An all-in-one workspace for note-taking, project management, and collaboration.",
        downloadLink: "https://www.notion.so/desktop",
        categories: ["Productivity"],
        platforms: ["Windows", "macOS", "iOS", "Android"],
    },
    {
        name: "Figma",
        description: "A web-based design tool for UI/UX design and prototyping.",
        downloadLink: "https://www.figma.com/downloads/",
        categories: ["Design"],
        platforms: ["Web", "Windows", "macOS"],
    },
    {
        name: "Adobe XD",
        description: "A vector-based design tool for creating user experiences for web and mobile apps.",
        downloadLink: "https://www.adobe.com/products/xd.html",
        categories: ["Design"],
        platforms: ["Windows", "macOS"],
    },
    {
        name: "Sketch",
        description: "A digital design toolkit for creating interactive prototypes and user interfaces.",
        downloadLink: "https://www.sketch.com/download/",
        categories: ["Design"],
        platforms: ["macOS"],
    },
    {
        name: "FileZilla",
        description: "A free and open-source FTP client for transferring files between a local and remote server.",
        downloadLink: "https://filezilla-project.org/download.php",
        categories: ["FTP Client"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "WinSCP",
        description: "An open-source FTP client for secure file transfer between local and remote systems.",
        downloadLink: "https://winscp.net/eng/download.php",
        categories: ["FTP Client"],
        platforms: ["Windows"],
    },
    {
        name: "Beyond Compare",
        description: "A file and folder comparison tool with merge functionality.",
        downloadLink: "https://www.scootersoftware.com/download.php",
        categories: ["File Comparison"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Nginx",
        description: "A high-performance web server and reverse proxy server.",
        downloadLink: "https://nginx.org/en/download.html",
        categories: ["Web Server"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Apache HTTP Server",
        description: "A widely-used open-source web server software.",
        downloadLink: "https://httpd.apache.org/download.cgi",
        categories: ["Web Server"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Node.js",
        description: "A JavaScript runtime built on Chrome's V8 engine, used for building server-side applications.",
        downloadLink: "https://nodejs.org/en/download/",
        categories: ["JavaScript Runtime"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Docker Compose",
        description: "A tool for defining and running multi-container Docker applications.",
        downloadLink: "https://docs.docker.com/compose/install/",
        categories: ["Containerization"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Webpack",
        description: "A module bundler for JavaScript applications that helps manage dependencies.",
        downloadLink: "https://webpack.js.org/guides/installation/",
        categories: ["Build Tool"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Gulp",
        description: "A toolkit for automating time-consuming tasks in your development workflow.",
        downloadLink: "https://gulpjs.com/docs/en/getting-started/quick-start",
        categories: ["Build Tool"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Grunt",
        description: "A JavaScript task runner for automating repetitive tasks in development.",
        downloadLink: "https://gruntjs.com/getting-started",
        categories: ["Build Tool"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Babel",
        description: "A JavaScript compiler that allows you to use next-generation JavaScript, today.",
        downloadLink: "https://babeljs.io/docs/en/next/installation.html",
        categories: ["JavaScript Compiler"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Jest",
        description: "A delightful JavaScript testing framework with a focus on simplicity.",
        downloadLink: "https://jestjs.io/docs/getting-started",
        categories: ["Testing"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Mocha",
        description: "A feature-rich JavaScript test framework running on Node.js and in the browser.",
        downloadLink: "https://mochajs.org/#installation",
        categories: ["Testing"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Karma",
        description: "A test runner for JavaScript that runs on various browsers and provides test results.",
        downloadLink: "https://karma-runner.github.io/latest/intro/installation.html",
        categories: ["Testing"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "SonarQube",
        description: "An open-source platform for continuous inspection of code quality.",
        downloadLink: "https://www.sonarqube.org/downloads/",
        categories: ["Code Quality"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "ESLint",
        description: "A tool for identifying and fixing problems in your JavaScript code.",
        downloadLink: "https://eslint.org/docs/latest/getting-started",
        categories: ["Linter"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Prettier",
        description: "An opinionated code formatter that supports many languages.",
        downloadLink: "https://prettier.io/docs/en/install.html",
        categories: ["Code Formatter"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Vim",
        description: "A highly configurable text editor built to enable efficient text editing.",
        downloadLink: "https://www.vim.org/download.php",
        categories: ["Code Editor"],
        platforms: ["Windows", "macOS", "Linux"],
    },
    {
        name: "Emacs",
        description: "A customizable text editor with a rich set of features and extensions.",
        downloadLink: "https://www.gnu.org/software/emacs/download.html",
        categories: ["Code Editor"],
        platforms: ["Windows", "macOS", "Linux"],
    },
];
export default programmingTools