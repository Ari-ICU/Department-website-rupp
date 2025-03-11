import React from 'react';
import image1 from '../../assets/research/1.png'; // Make sure this path is correct

const researchData = [
    {
        title: 'Abstracts',
        content: 'The rapid advancements in computer science have revolutionized industries, especially in cloud computing and big data analytics. However, these advancements also introduce significant cybersecurity threats. This paper explores the latest innovations in computer science, such as breakthroughs in artificial intelligence, quantum computing, and their potential solutions.'
    },
    {
        title: '1. Introduction',
        content: 'Computational science has experienced exponential growth over the past few decades, influencing various sectors, including healthcare, finance, and communication. As we push the boundaries of computational capabilities, we encounter both groundbreaking opportunities and significant obstacles. This research examines key innovations, their impact, and the challenges that arise from these advancements.',
        images: image1
    },
    {
        title: '2. Innovations in Modern Computer Science',
        content: [
            {
                subtitle: '2.1 Artificial Intelligence and Machine Learning',
                text: 'AI and machine learning have significantly transformed industries by enabling automation, data-driven decision-making, and intelligent systems. Innovations such as deep learning, reinforcement learning, and neural networks have led to advancements in natural language processing, image recognition, and autonomous systems. AI-driven solutions are now widely used in healthcare for diagnostics, in finance for fraud detection, and in manufacturing for predictive maintenance.'
            },
            {
                subtitle: '2.2 Big Data and Cloud Computing',
                text: 'The rise of big data has led to the need for efficient storage, processing, and analysis solutions. Cloud computing platforms, including AWS, Microsoft Azure, and Google Cloud, provide scalable solutions for handling massive datasets. The combination of cloud computing and big data analytics has enabled businesses to derive meaningful insights, optimize operations, and enhance customer experiences.'
            }
        ]
    },
    {
        title: '3. Challenges in Modern Computational Science',
        content: [
            {
                subtitle: '3.1 Ethical and Bias Concerns in AI',
                text: 'As AI becomes more integrated into decision-making processes, ethical concerns arise, including algorithmic bias, data privacy, and accountability. Biased AI models can reinforce discrimination in hiring, loan approvals, and law enforcement. Addressing these issues requires regulatory frameworks, transparency in AI models, and ethical AI development practices.'
            },
            {
                subtitle: '3.2 Cybersecurity Threats',
                text: 'With the increasing reliance on digital infrastructure, cybersecurity threats have grown significantly. Cyberattacks, including ransomware, data breaches, and phishing, pose risks to individuals, corporations, and governments. Implementing robust encryption methods, AI-driven threat detection, and proactive security measures is essential to mitigate these risks.'
            }
        ]
    },
    {
        title: '4. Future Directions and Solutions',
        content: [
            "- To overcome these challenges, researchers are exploring various strategies:",
            "Advancements in Quantum Computing: Improving quantum error correction and increasing qubit stability to enhance computational efficiency.",
            "Ethical AI Development: Creating unbiased datasets, improving model interpretability, and establishing ethical AI guidelines.",
            "Enhanced Cybersecurity Measures: Developing AI-driven threat detection systems, blockchain-based security protocols, and zero-trust architectures."
        ]
    },
    {
        title: '5. Conclusion',
        content: 'The advancements in computer science continue to shape the modern world, offering transformative solutions across multiple industries. However, addressing computational, ethical, and security challenges is essential to ensure sustainable growth. Through continuous research and innovation, the future of computing will unlock even greater potential while mitigating the associated risks.'
    },
    {
        title: 'References',
        tag: 'sources',
        content: [
            "Geim, A. K., & Novoselov, K. S. (2007). The rise of graphene. Nature Materials, 6(3), 183-191.",
            "Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press.",
            "Kshetri, N. (2021). The economics of AI security. Computer, 54(1), 62-66.",
            "Marz, N., & Warren, J. (2015). Big Data: Principles and best practices of scalable real-time data systems. Manning Publications.",
            "Nielsen, M. A., & Chuang, I. L. (2010). Quantum Computation and Quantum Information. Cambridge University Press.",
            "O’Neil, C. (2016). Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy. Crown Publishing Group.",
            "Preskill, J. (2018). Quantum Computing in the NISQ era and beyond. Quantum, 2, 79.",
            "Russell, S., & Norvig, P. (2021). Artificial Intelligence: A Modern Approach. Pearson.",
            "Stallings, W. (2018). Cryptography and Network Security: Principles and Practice. Pearson."
        ]
    }
];

const ResearchSection = () => {
    return (
        <div className="my-12">
            <div className="max-w-4xl mx-auto px-4">
                {researchData.map((section, index) => (
                    <div key={index} className="mb-10">
                        <div className="flex items-center gap-6">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.title}</h2>
                            {section.tag && <p className="py-1 px-4 mb-4 border rounded-2xl text-gray-400">{section.tag}</p>}
                        </div>
                        {Array.isArray(section.content) || typeof section.content === 'object' ? (
                            <div className="ml-6">
                                {Array.isArray(section.content) ? (
                                    section.content.map((subContent, subIndex) => (
                                        typeof subContent === 'string' ? (
                                            <ul key={subIndex} className="list-disc ml-6">
                                                <li className="text-gray-700 mb-4">{subContent}</li>
                                            </ul>
                                        ) : (
                                            <div key={subIndex}>
                                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{subContent.subtitle}</h3>
                                                <p className="text-gray-700 mb-4">{subContent.text}</p>
                                            </div>
                                        )
                                    ))
                                ) : (
                                    section.content
                                )}
                            </div>
                        ) : (
                            <p className="text-gray-700">{section.content}</p>
                        )}
                        {section.images && <img src={section.images} alt="" className="w-full h-96 mt-4" />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResearchSection;
