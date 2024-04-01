export const architectures = [
    { 
        name: 'layers',
        link: 'architectures/layers',
        description: 'The n-tier architecture, often referred to as multi-tier architecture, divides an application into multiple layers, each serving a specific purpose. It typically consists of a presentation tier, responsible for user interaction; a business logic tier, managing application logic; and a data tier, handling data storage and retrieval. This approach promotes modularity, scalability, and maintainability by separating concerns and facilitating code reuse. Each tier operates independently, enhancing flexibility and facilitating distributed computing. Overall, the n-tier architecture offers a structured framework for building robust and scalable software systems.', 
        pros: ['Separation of Concerns.', 'Modularity.', 'Scalability.', 'Code Reusability.', 'Technological Flexibility.'], 
        cons: ['Complexity.', 'Communication Overhead.', 'Unwanted Coupling.', 'Over-Engineering.', 'Maintenance Challenges.'], 
        cases: ['User Authentication.', 'School Management System.', 'Personal Finance Management App.', 'Some Reservation System.', 'Task Management.', 'Simple inventory Management System for a Supply Chain.', 'E-Commerces.'], 
        conclusion: "The n-tier layered architecture offers a structured approach to software development, providing clear separation of concerns and promoting scalability and maintainability. You should use this architecture when you require a modular and scalable system, with well-defined boundaries between presentation, business logic, and data access layers. This architecture is particularly suitable for projects with evolving requirements and long-term sustainability goals. However, you should not use this architecture when simplicity and rapid development are top priorities. The added complexity of managing multiple layers may outweigh the benefits in smaller or less complex projects. Additionally, if your project does not anticipate significant future growth or if the overhead of maintaining separate layers is prohibitive, exploring alternative architectural styles may be more appropriate.", 
        history: "The n-tier architecture, born from the evolving landscape of software development, originated as a response to the escalating complexity of applications. Its inception can be traced back to the 1970s and 1980s when the need for organized systems prompted researchers to explore layered structures, reminiscent of the OSI model. However, it wasn't until the rise of client-server computing in the late 20th century that the n-tier architecture gained prominence. As businesses increasingly relied on software for automation and data management, developers adopted this structured approach, separating user interfaces, business logic, and data layers into distinct tiers. Initially implemented using monolithic server-side frameworks, the architecture found a new dimension with the advent of web technologies, becoming ubiquitous in web application development. Today, amidst the cloud-native and microservices era, the n-tier architecture continues to evolve, leveraging distributed computing paradigms and containerization for enhanced scalability, flexibility, and resilience. Its enduring legacy underscores its pivotal role in shaping the software development landscape, providing a framework for building robust and adaptable systems that meet the demands of modern business environments.",
        answers: {
            complexity: '4.5',
            deadline: '6',
            scalability: 'medium',
            resilience_or_total_uptime: 'none',
            devops: 'unfamiliar',
            tecnicalUsers: 'no',
        }
    },
]