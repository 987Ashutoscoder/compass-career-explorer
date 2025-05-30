import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("planning");

  return (
    <div className="container py-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Project Documentation</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="planning">Planning</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
          <TabsTrigger value="design">System Design</TabsTrigger>
          <TabsTrigger value="code">Codes</TabsTrigger>
          <TabsTrigger value="results">Results & Conclusion</TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 bg-slate-50 rounded-lg p-4">
            <h3 className="font-medium mb-2">Table of Contents</h3>
            <ScrollArea className="h-[calc(100vh-240px)]">
              <ul className="space-y-1">
                {activeTab === "planning" && (
                  <>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#timeline" className="block">3.1 Timeline Development</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#resources" className="block">3.2 Resources Required</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#challenges" className="block">3.3 Challenges Faced</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#mitigation" className="block">3.4 Mitigation Strategies</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#conclusion1" className="block">3.5 Conclusion</a>
                    </li>
                  </>
                )}
                
                {activeTab === "methodology" && (
                  <>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#requirements" className="block">4.1 Requirements Gathering</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#systemdesign" className="block">4.2 System Design</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#development" className="block">4.3 Development</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#integration" className="block">4.4 Integration of AWS</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#testing" className="block">4.5 Testing and QA</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#deployment" className="block">4.6 Deployment</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#agile" className="block">4.7 Agile Principles</a>
                    </li>
                  </>
                )}
                
                {activeTab === "design" && (
                  <>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#dbmodels" className="block">5.1 Database Models</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#urlstructure" className="block">5.2 URL Structure</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#directory" className="block">5.3 Directory Structure</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#systemconfig" className="block">5.4 System Configuration</a>
                    </li>
                  </>
                )}
                
                {activeTab === "code" && (
                  <>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#models" className="block">6.1 Models</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#views" className="block">6.2 Views</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#admin" className="block">6.3 Admin Customization</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#templates" className="block">6.4 HTML Templates</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#javascript" className="block">6.5 JavaScript for Blog</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#deployment-code" className="block">6.6 Deployment Code</a>
                    </li>
                  </>
                )}
                
                {activeTab === "results" && (
                  <>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#landing" className="block">7.1 Landing Page</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#shop" className="block">7.2 Shop Section</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#blogs" className="block">7.3 Blogs Section</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#admin-panel" className="block">7.4 Admin Panel</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#final-conclusion" className="block">8.1 Conclusion</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#future" className="block">8.2 Future Enhancements</a>
                    </li>
                    <li className="text-sm py-1 px-2 hover:bg-slate-100 rounded">
                      <a href="#future-scope" className="block">8.3 Conclusion of Future Scope</a>
                    </li>
                  </>
                )}
              </ul>
            </ScrollArea>
          </div>

          <div className="md:col-span-3">
            <ScrollArea className="h-[calc(100vh-240px)]">
              <TabsContent value="planning" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">CHAPTER 3: PROJECT PLANNING AND MANAGEMENT</h2>
                  
                  <section id="timeline" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">3.1 TIMELINE DEVELOPMENT</h3>
                    <div className="space-y-4">
                      <p>The project development was organized into several phases with specific timelines:</p>
                      
                      <div className="relative border-l-2 border-primary-blue pl-6 ml-6 pb-8">
                        <div className="mb-6">
                          <div className="absolute -left-3 mt-1.5">
                            <div className="h-6 w-6 rounded-full bg-primary-blue flex items-center justify-center">
                              <ChevronRight className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <h4 className="text-lg font-medium">Phase 1: Project Initialization (Weeks 1-2)</h4>
                          <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
                            <li>Project scope definition and requirement analysis</li>
                            <li>Stakeholder meetings and approval of project plan</li>
                            <li>Resource allocation and environment setup</li>
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <div className="absolute -left-3 mt-1.5">
                            <div className="h-6 w-6 rounded-full bg-primary-blue flex items-center justify-center">
                              <ChevronRight className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <h4 className="text-lg font-medium">Phase 2: Design and Architecture (Weeks 3-4)</h4>
                          <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
                            <li>System architecture and database design</li>
                            <li>UI/UX design and wireframing</li>
                            <li>Technology stack finalization</li>
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <div className="absolute -left-3 mt-1.5">
                            <div className="h-6 w-6 rounded-full bg-primary-blue flex items-center justify-center">
                              <ChevronRight className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <h4 className="text-lg font-medium">Phase 3: Development (Weeks 5-10)</h4>
                          <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
                            <li>Development of core modules (authentication, database, APIs)</li>
                            <li>Frontend implementation and integration with backend</li>
                            <li>Implementation of AWS services</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="absolute -left-3 mt-1.5">
                            <div className="h-6 w-6 rounded-full bg-primary-blue flex items-center justify-center">
                              <ChevronRight className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <h4 className="text-lg font-medium">Phase 4: Testing and Deployment (Weeks 11-12)</h4>
                          <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
                            <li>Unit, integration, and user acceptance testing</li>
                            <li>Bug fixing and performance optimization</li>
                            <li>Deployment to production environment</li>
                            <li>Documentation and knowledge transfer</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                  
                  <section id="resources" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">3.2 RESOURCES REQUIRED</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h4 className="font-medium mb-2">Human Resources</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Project Manager (1)</li>
                          <li>Full-stack Developers (3)</li>
                          <li>UI/UX Designer (1)</li>
                          <li>QA Engineer (1)</li>
                          <li>DevOps Engineer (1)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h4 className="font-medium mb-2">Technical Resources</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Development machines (laptops/workstations)</li>
                          <li>AWS account and services</li>
                          <li>Development and staging environments</li>
                          <li>Code repository (GitHub)</li>
                          <li>CI/CD pipeline tools</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  
                  <section id="challenges" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">3.3 CHALLENGES FACED</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Technical Challenges</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside text-gray-700 pl-4">
                            <li>Integration of multiple AWS services</li>
                            <li>Authentication and authorization implementation</li>
                            <li>Performance optimization for media-heavy content</li>
                            <li>Database schema optimization for complex queries</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Resource Constraints</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside text-gray-700 pl-4">
                            <li>Limited development time</li>
                            <li>Budget constraints for premium services</li>
                            <li>Limited specialized expertise in certain areas</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>External Factors</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc list-inside text-gray-700 pl-4">
                            <li>Changing requirements from stakeholders</li>
                            <li>Compatibility issues with third-party services</li>
                            <li>Security compliance requirements</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </section>
                  
                  <section id="mitigation" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">3.4 MITIGATION STRATEGIES</h3>
                    <div className="bg-slate-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-2">Agile Methodology</h4>
                      <p className="text-gray-700">Implementation of agile development methodology with two-week sprints to address changing requirements and maintain flexibility throughout the development process.</p>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-2">Technical Solutions</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Conducted architecture reviews to identify potential issues early</li>
                        <li>Implemented automated testing to reduce regression issues</li>
                        <li>Set up performance monitoring and optimization</li>
                        <li>Created documentation throughout the development process</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-md">
                      <h4 className="font-medium mb-2">Resource Management</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Prioritized features based on business value</li>
                        <li>Cross-trained team members to reduce dependency on specialists</li>
                        <li>Used open-source alternatives where appropriate</li>
                      </ul>
                    </div>
                  </section>
                  
                  <section id="conclusion1">
                    <h3 className="text-xl font-semibold mb-4">3.5 CONCLUSION</h3>
                    <p className="text-gray-700">
                      The project planning phase established a solid foundation for development by setting clear timelines, 
                      identifying necessary resources, anticipating challenges, and implementing mitigation strategies. 
                      Despite several obstacles, the team was able to adhere to the project timeline through effective 
                      planning and agile methodologies. The early identification of potential issues and proactive 
                      problem-solving approach contributed significantly to the successful delivery of the project.
                    </p>
                  </section>
                </div>
              </TabsContent>
              
              <TabsContent value="methodology" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">CHAPTER 4: METHODOLOGY</h2>
                  
                  <section id="requirements" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">4.1 REQUIREMENTS GATHERING AND ANALYSIS</h3>
                    <p className="mb-4 text-gray-700">
                      The requirements gathering process employed multiple techniques to ensure comprehensive coverage of all stakeholder needs:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h4 className="font-medium mb-2">Stakeholder Interviews</h4>
                        <p className="text-gray-700">Conducted structured interviews with key stakeholders to understand business goals, user expectations, and technical constraints.</p>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h4 className="font-medium mb-2">Market Research</h4>
                        <p className="text-gray-700">Analyzed competing applications to identify industry best practices and potential differentiators.</p>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      The gathered requirements were categorized into functional, non-functional, and technical requirements. 
                      Priority was assigned to each requirement using the MoSCoW method (Must have, Should have, Could have, Won't have).
                    </p>
                  </section>
                  
                  <section id="systemdesign" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">4.2 SYSTEM DESIGN</h3>
                    <p className="mb-4 text-gray-700">
                      System design focused on creating a scalable, maintainable architecture that would support all required functionality:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-2">Architecture Pattern</h4>
                      <p className="text-gray-700">
                        We adopted a microservices architecture to ensure modularity and independent scalability of different system components.
                        This approach facilitated easier maintenance and future enhancements.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-md">
                      <h4 className="font-medium mb-2">Design Principles</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Separation of concerns through clear module boundaries</li>
                        <li>RESTful API design for consistent data access</li>
                        <li>Responsive design for cross-device compatibility</li>
                        <li>Security-first approach with proper authentication and authorization</li>
                      </ul>
                    </div>
                  </section>
                  
                  <section id="development" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">4.3 DEVELOPMENT</h3>
                    <p className="mb-4 text-gray-700">
                      Development followed modern best practices to ensure code quality and maintainability:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h4 className="font-medium mb-2">Coding Standards</h4>
                        <p className="text-gray-700">
                          Implemented consistent coding standards across the team using linters and automated code formatters.
                          Code reviews were conducted for all pull requests.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h4 className="font-medium mb-2">Version Control</h4>
                        <p className="text-gray-700">
                          Used Git with a feature branch workflow. All features were developed in separate branches
                          and merged to the main branch after code review and testing.
                        </p>
                      </div>
                    </div>
                  </section>
                  
                  <section id="integration" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">4.4 INTEGRATION OF AWS SERVICES</h3>
                    <p className="mb-4 text-gray-700">
                      AWS services were carefully selected and integrated to provide reliable, scalable infrastructure:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-2">Core Services Utilized</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Amazon EC2 for application hosting</li>
                        <li>Amazon RDS for database management</li>
                        <li>Amazon S3 for static content and media storage</li>
                        <li>AWS Lambda for serverless processing</li>
                        <li>Amazon CloudFront for content delivery</li>
                        <li>AWS Cognito for authentication services</li>
                      </ul>
                    </div>
                    <p className="text-gray-700">
                      Infrastructure as Code (IaC) principles were applied using AWS CloudFormation to ensure consistent, 
                      repeatable deployments across environments.
                    </p>
                  </section>
                  
                  <section id="testing" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">4.5 TESTING AND QUALITY ASSURANCE</h3>
                    <p className="mb-4 text-gray-700">
                      A comprehensive testing strategy was implemented to ensure reliability and performance:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h4 className="font-medium mb-2">Testing Levels</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          <li>Unit testing with Jest for individual components</li>
                          <li>Integration testing for module interactions</li>
                          <li>System testing for end-to-end workflows</li>
                          <li>Performance testing under various load conditions</li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 p-4 rounded-md">
                        <h4 className="font-medium mb-2">Automation</h4>
                        <p className="text-gray-700">
                          Implemented CI/CD pipeline with automated testing to ensure code quality 
                          at every stage of development. Test coverage metrics were used to identify gaps.
                        </p>
                      </div>
                    </div>
                  </section>
                  
                  <section id="deployment" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">4.6 DEPLOYMENT AND POST-DEPLOYMENT MONITORING</h3>
                    <p className="mb-4 text-gray-700">
                      The deployment process was designed to minimize downtime and ensure reliability:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-2">Deployment Strategy</h4>
                      <p className="text-gray-700">
                        Implemented blue-green deployment to eliminate downtime during releases.
                        Automated rollback mechanisms were set up to quickly restore service in case of issues.
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-md">
                      <h4 className="font-medium mb-2">Monitoring</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Application performance monitoring using AWS CloudWatch</li>
                        <li>Error tracking and alerting</li>
                        <li>User behavior analytics</li>
                        <li>Resource utilization monitoring</li>
                      </ul>
                    </div>
                  </section>
                  
                  <section id="agile">
                    <h3 className="text-xl font-semibold mb-4">4.7 AGILE PRINCIPLES AND COLLABORATIVE DEVELOPMENT</h3>
                    <p className="mb-4 text-gray-700">
                      The project adhered to agile principles to ensure adaptability and stakeholder satisfaction:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-md">
                      <h4 className="font-medium mb-2">Agile Practices Implemented</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Two-week sprint cycles with planning and retrospective meetings</li>
                        <li>Daily stand-up meetings to identify and address blockers</li>
                        <li>Continuous integration to maintain a working codebase</li>
                        <li>Regular stakeholder demos to gather feedback</li>
                        <li>Backlog grooming to prioritize tasks</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </TabsContent>
              
              <TabsContent value="design" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">CHAPTER 5: SYSTEM DESIGN</h2>
                  
                  <section id="dbmodels" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">5.1 DATABASE MODELS</h3>
                    <p className="mb-4 text-gray-700">
                      The database schema was designed with normalization principles and optimal query performance in mind:
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-2">Core Entities</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li><strong>Users:</strong> Stores user authentication and profile data</li>
                        <li><strong>Products:</strong> Contains product information for the shop section</li>
                        <li><strong>Categories:</strong> Product categorization hierarchy</li>
                        <li><strong>Blog Posts:</strong> Content for the blog section</li>
                        <li><strong>Comments:</strong> User feedback on blog posts</li>
                        <li><strong>Orders:</strong> Customer purchase records</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-md">
                      <h4 className="font-medium mb-2">Entity Relationships</h4>
                      <p className="text-gray-700 mb-2">Key relationships between entities include:</p>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>One-to-many relationship between Users and Blog Posts</li>
                        <li>Many-to-many relationship between Products and Categories</li>
                        <li>One-to-many relationship between Blog Posts and Comments</li>
                        <li>Many-to-many relationship between Orders and Products</li>
                      </ul>
                    </div>
                  </section>
                  
                  <section id="urlstructure" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">5.2 URL STRUCTURE</h3>
                    <p className="mb-4 text-gray-700">
                      The URL structure follows RESTful conventions for resource identification:
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b text-left">URL Pattern</th>
                            <th className="py-2 px-4 border-b text-left">Description</th>
                            <th className="py-2 px-4 border-b text-left">HTTP Methods</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b"><code>/</code></td>
                            <td className="py-2 px-4 border-b">Homepage</td>
                            <td className="py-2 px-4 border-b">GET</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b"><code>/shop</code></td>
                            <td className="py-2 px-4 border-b">Product listing page</td>
                            <td className="py-2 px-4 border-b">GET</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b"><code>/shop/categories/:id</code></td>
                            <td className="py-2 px-4 border-b">Category-filtered products</td>
                            <td className="py-2 px-4 border-b">GET</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b"><code>/shop/products/:id</code></td>
                            <td className="py-2 px-4 border-b">Individual product details</td>
                            <td className="py-2 px-4 border-b">GET</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b"><code>/blog</code></td>
                            <td className="py-2 px-4 border-b">Blog listing page</td>
                            <td className="py-2 px-4 border-b">GET</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b"><code>/blog/:slug</code></td>
                            <td className="py-2 px-4 border-b">Individual blog post</td>
                            <td className="py-2 px-4 border-b">GET</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b"><code>/api/products</code></td>
                            <td className="py-2 px-4 border-b">Products API</td>
                            <td className="py-2 px-4 border-b">GET, POST, PUT, DELETE</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b"><code>/api/posts</code></td>
                            <td className="py-2 px-4 border-b">Blog posts API</td>
                            <td className="py-2 px-4 border-b">GET, POST, PUT, DELETE</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b"><code>/admin</code></td>
                            <td className="py-2 px-4 border-b">Admin panel</td>
                            <td className="py-2 px-4 border-b">GET</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                  
                  <section id="directory" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">5.3 DIRECTORY STRUCTURE</h3>
                    <p className="mb-4 text-gray-700">
                      The application follows a modular directory structure for better organization and maintainability:
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-md font-mono text-sm">
                      <pre className="whitespace-pre-wrap">
{`project-root/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── shop/
│   │   └── blog/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   ├── Blog.tsx
│   │   ├── Admin.tsx
│   │   └── Documentation.tsx
│   ├── hooks/
│   ├── contexts/
│   ├── utils/
│   ├── api/
│   ├── types/
│   ├── assets/
│   └── styles/
├── public/
├── config/
└── scripts/`}
                      </pre>
                    </div>
                    <p className="mt-4 text-gray-700">
                      This structure separates concerns by functionality and facilitates easier navigation and maintenance of the codebase.
                    </p>
                  </section>
                  
                  <section id="systemconfig">
                    <h3 className="text-xl font-semibold mb-4">5.4 SYSTEM CONFIGURATION</h3>
                    <p className="mb-4 text-gray-700">
                      Configuration management is handled through environment-specific settings:
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-2">Environment Variables</h4>
                      <p className="text-gray-700">
                        Environment-specific configuration is managed using .env files with different settings for development, staging, and production environments.
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-md">
                      <h4 className="font-medium mb-2">AWS Configuration</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>EC2 instance type: t3.medium (staging), t3.large (production)</li>
                        <li>RDS: MySQL 8.0 with multi-AZ deployment for production</li>
                        <li>S3 buckets: separate buckets for static assets, user uploads, and backups</li>
                        <li>CloudFront distribution for global content delivery</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">CHAPTER 6: CODES</h2>
                  
                  <p className="text-gray-700 mb-6">
                    This section provides an overview of the key code components that power the application's functionality.
                  </p>
                  
                  <section id="models" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">6.1 MODELS</h3>
                    <p className="mb-4 text-gray-700">
                      The application uses TypeScript interfaces to define data models:
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-md mb-4 font-mono text-sm">
                      <pre className="whitespace-pre-wrap overflow-x-auto">
{`// User model
interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

// Product model
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryIds: string[];
  imageUrls: string[];
  inventory: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Blog Post model
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  authorId: string;
  imageUrl?: string;
  tags: string[];
  published: boolean;
  publishDate: Date;
  createdAt: Date;
  updatedAt: Date;
}`}
                      </pre>
                    </div>
                  </section>
                  
                  <section id="views" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">6.2 VIEWS</h3>
                    <p className="mb-4 text-gray-700">
                      Frontend views are implemented using React components. Here's an example of a product listing component:
                    </p>
                    
                    <div className="bg-slate-50 p-4 rounded-md font-mono text-sm">
                      <pre className="whitespace-pre-wrap overflow-x-auto">
{`import React from 'react';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onProductClick: (productId: string) => void;
}

const ProductList = ({ products, onProductClick }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div 
          key={product.id}
          className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          onClick={() => onProductClick(product.id)}
        >
          <div className="aspect-w-4 aspect-h-3">
            <img 
              src={product.imageUrls[0]} 
              alt={product.name}
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-gray-500 mb-2">
              \${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-700">
              {product.description.substring(0, 100)}
              {product.description.length > 100 ? '...' : ''}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;`}
                      </pre>
                    </div>
                  </section>
                  
                  <section id="admin" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">6.3 ADMIN CUSTOMIZATION</h3>
                    <p className="text-gray-700 mb-4">
                      The admin interface is customized with specialized components for content management.
                      Key features include role-based access control and custom editing interfaces.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-md mb-4">
                      <h4 className="font-medium mb-2">Admin Panel Features</h4>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Customized dashboard with analytics</li>
                        <li>Content management for products and blog posts</li>
                        <li>User management and permissions</li>
                        <li>Image upload and management</li>
                      </ul>
                    </div>
                  </section>
                  
                  <section id="templates" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">6.4 HTML TEMPLATES</h3>
                    <p className="text-gray-700">
                      The application uses React components as templates. Additional HTML templates are used for email notifications.
                    </p>
                  </section>
                  
                  <section id="javascript" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">6.5 JAVASCRIPT FOR BLOG CREATION</h3>
                    <p className="text-gray-700 mb-4">
                      Blog post creation is facilitated by a rich text editor implemented in JavaScript.
                    </p>
                  </section>
                  
                  <section id="deployment-code">
                    <h3 className="text-xl font-semibold mb-4">6.6 DEPLOYMENT CODE (AWS CONFIGURATION)</h3>
                    <p className="text-gray-700 mb-4">
                      Deployment is automated using Infrastructure as Code with AWS CloudFormation.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-md">
                      <h4 className="font-medium mb-2">CloudFormation Template Excerpts</h4>
                      <p className="text-gray-700 mb-2">
                        Key resources defined in CloudFormation:
                      </p>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>EC2 instances with auto-scaling group</li>
                        <li>Application load balancer</li>
                        <li>Security groups and IAM roles</li>
                        <li>RDS database instance</li>
                        <li>S3 buckets and CloudFront distribution</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </TabsContent>
              
              <TabsContent value="results" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">CHAPTER 7 & 8: RESULTS AND CONCLUSION</h2>
                  
                  <section id="landing" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">7.1 LANDING PAGE</h3>
                    <p className="mb-4 text-gray-700">
                      The landing page provides an engaging entry point to the application with key features:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-md mb-4">
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Hero section with call-to-action</li>
                        <li>Featured products carousel</li>
                        <li>Recent blog posts</li>
                        <li>Newsletter signup</li>
                      </ul>
                    </div>
                    <p className="text-gray-700">
                      Performance metrics show an average load time of under 2 seconds and a bounce rate of 25%.
                    </p>
                  </section>
                  
                  <section id="shop" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">7.2 SHOP SECTION</h3>
                    <p className="mb-4 text-gray-700">
                      The shop section features a responsive product catalog with filtering and search capabilities.
                    </p>
                  </section>
                  
                  <section id="blogs" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">7.3 BLOGS SECTION</h3>
                    <p className="mb-4 text-gray-700">
                      The blog section provides content marketing capabilities with social sharing and commenting features.
                    </p>
                  </section>
                  
                  <section id="admin-panel" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">7.4 ADMIN PANEL</h3>
                    <p className="mb-4 text-gray-700">
                      The admin panel provides comprehensive management capabilities for authorized users.
                    </p>
                  </section>
                  
                  <section id="final-conclusion" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">8.1 CONCLUSION</h3>
                    <p className="mb-4 text-gray-700">
                      The project successfully delivered a fully functional e-commerce platform with content management capabilities.
                      Key objectives were met within the specified timeline and budget constraints.
                    </p>
                  </section>
                  
                  <section id="future" className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">8.2 FUTURE ENHANCEMENTS</h3>
                    <p className="mb-4 text-gray-700">
                      Potential future enhancements include:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-md">
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Integration with additional payment gateways</li>
                        <li>Mobile application development</li>
                        <li>Enhanced analytics and reporting</li>
                        <li>AI-powered product recommendations</li>
                        <li>Internationalization and localization</li>
                      </ul>
                    </div>
                  </section>
                  
                  <section id="future-scope">
                    <h3 className="text-xl font-semibold mb-4">8.3 CONCLUSION OF FUTURE SCOPE</h3>
                    <p className="text-gray-700">
                      The modular architecture of the application provides a solid foundation for future enhancements.
                      The team has identified prioritized improvements for the next development phase based on user feedback
                      and business requirements.
                    </p>
                  </section>
                </div>
              </TabsContent>
            </ScrollArea>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Documentation;
