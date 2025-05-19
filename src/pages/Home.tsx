
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-up">
              <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                Find Your Perfect Career Path
              </h1>
              <p className="text-lg mb-8 text-white/90 max-w-lg">
                Career Compass guides students and freshers towards the best-suited career 
                paths based on your interests, skills, and academic background.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/assessment">
                  <Button size="lg" className="bg-white text-primary-blue hover:bg-white/90">
                    Start Assessment
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    Explore Careers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Students planning their career" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gray-900">How Career Compass Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform helps you discover, explore, and plan your career journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
              <div className="h-12 w-12 bg-primary-blue/10 rounded-full flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">Take Assessment</h3>
              <p className="text-gray-600 mb-4">
                Complete our comprehensive quiz to identify your strengths, interests, and values that align with potential careers.
              </p>
              <Link to="/assessment" className="text-primary-blue font-medium hover:underline">
                Start Quiz →
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
              <div className="h-12 w-12 bg-secondary-teal/10 rounded-full flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">Discover Careers</h3>
              <p className="text-gray-600 mb-4">
                Explore detailed information about career paths that match your profile, including requirements and opportunities.
              </p>
              <Link to="/careers" className="text-secondary-teal font-medium hover:underline">
                Browse Careers →
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
              <div className="h-12 w-12 bg-accent-orange/10 rounded-full flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">Track Progress</h3>
              <p className="text-gray-600 mb-4">
                Save your favorite careers, set goals, and access personalized resources to help you succeed in your chosen path.
              </p>
              <Link to="/register" className="text-accent-orange font-medium hover:underline">
                Create Account →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-blue mb-2">10,000+</div>
              <p className="text-gray-600">Career Assessments</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-blue mb-2">250+</div>
              <p className="text-gray-600">Career Paths</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-blue mb-2">95%</div>
              <p className="text-gray-600">Student Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-blue mb-2">500+</div>
              <p className="text-gray-600">Resources Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gray-900">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from students who have found their ideal career path with Career Compass
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Computer Science Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Career Compass helped me discover my passion for UX design when I was confused between software development and design. The assessment was spot on!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Business Graduate</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I was torn between consulting and marketing. The detailed career information and personalized suggestions helped me make an informed decision."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Priya Patel</h4>
                  <p className="text-sm text-gray-500">Psychology Major</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The resources provided by Career Compass were invaluable. From resume templates to interview tips, everything helped me land my dream internship."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Ready to Find Your Perfect Career?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Take our comprehensive assessment and discover career paths that align with your unique skills and interests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/assessment">
              <Button size="lg" className="bg-white text-primary-blue hover:bg-white/90">
                Start Assessment
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gray-900">Why Choose Career Compass</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform offers unique advantages to help you make confident career decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle2 className="h-6 w-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2 text-gray-900">Personalized Recommendations</h3>
                <p className="text-gray-600">
                  Our advanced assessment algorithm provides tailored career suggestions based on your unique profile.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle2 className="h-6 w-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2 text-gray-900">Comprehensive Information</h3>
                <p className="text-gray-600">
                  Get detailed insights about various careers including skills required, educational paths, and salary expectations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle2 className="h-6 w-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2 text-gray-900">Expert-Curated Resources</h3>
                <p className="text-gray-600">
                  Access a library of resources including resume templates, interview preparation guides, and skill development tools.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle2 className="h-6 w-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2 text-gray-900">Goal Setting & Progress Tracking</h3>
                <p className="text-gray-600">
                  Create personalized career goals and track your progress with our intuitive dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
