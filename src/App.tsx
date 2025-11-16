import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, Users, BookOpen, Stethoscope, Utensils, Lightbulb, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const heroTextRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const videoSectionRef = useRef<HTMLDivElement>(null)
  const storySectionRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const ctaSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (navRef.current) {
        gsap.from(navRef.current, {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: 'power3.out'
        })

        ScrollTrigger.create({
          start: 'top -80',
          onUpdate: (self) => {
            if (navRef.current) {
              gsap.to(navRef.current, {
                background: self.direction === 1
                  ? 'rgba(255, 253, 250, 0.95)'
                  : 'rgba(255, 253, 250, 0.7)',
                boxShadow: self.direction === 1
                  ? '0 4px 30px rgba(0, 0, 0, 0.08)'
                  : '0 4px 20px rgba(0, 0, 0, 0.03)',
                duration: 0.3
              })
            }
          }
        })
      }

      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          opacity: 0,
          y: 60,
          duration: 1.2,
          stagger: 0.2,
          delay: 0.5,
          ease: 'power3.out'
        })
      }

      if (videoSectionRef.current) {
        gsap.from(videoSectionRef.current, {
          scrollTrigger: {
            trigger: videoSectionRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 80,
          duration: 1,
          ease: 'power3.out'
        })
      }

      if (storySectionRef.current) {
        const images = storySectionRef.current.querySelectorAll('.story-image')
        const text = storySectionRef.current.querySelectorAll('.story-text')

        gsap.from(images, {
          scrollTrigger: {
            trigger: storySectionRef.current,
            start: 'top 70%',
          },
          opacity: 0,
          scale: 0.9,
          rotation: -5,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out'
        })

        gsap.from(text, {
          scrollTrigger: {
            trigger: storySectionRef.current,
            start: 'top 70%',
          },
          opacity: 0,
          x: 50,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out'
        })
      }

      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current.querySelector('.marquee-content')
        if (marqueeContent) {
          const marqueeWidth = marqueeContent.scrollWidth / 2

          gsap.to(marqueeContent, {
            x: -marqueeWidth,
            duration: 40,
            ease: 'none',
            repeat: -1
          })
        }
      }

      if (carouselRef.current) {
        gsap.from(carouselRef.current, {
          scrollTrigger: {
            trigger: carouselRef.current,
            start: 'top 70%',
          },
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: 'power3.out'
        })
      }

      if (ctaSectionRef.current) {
        gsap.from(ctaSectionRef.current.children, {
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: 'top 70%',
          },
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out'
        })
      }
    })

    return () => ctx.revert()
  }, [])

  const initiatives = [
    {
      icon: <BookOpen size={40} />,
      title: "Educational Support",
      description: "Empowering young minds with quality education and learning resources",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      icon: <Stethoscope size={40} />,
      title: "Healthcare Assistance",
      description: "Ensuring every child has access to basic healthcare and wellness",
      image: "https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Skill Development",
      description: "Building futures through vocational training and life skills",
      image: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      icon: <Utensils size={40} />,
      title: "Nutrition Support",
      description: "Nourishing bodies and minds with balanced meal programs",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      icon: <Users size={40} />,
      title: "Awareness Programs",
      description: "Creating awareness about child rights and welfare in communities",
      image: "https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      icon: <Heart size={40} />,
      title: "Community Welfare",
      description: "Building stronger communities through collective care and support",
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  ]

  const stories = [
    {
      quote: "Education gave me wings to fly. Now I dream of becoming a teacher to help others like me.",
      name: "Priya",
      age: 14,
      image: "https://images.pexels.com/photos/8422149/pexels-photo-8422149.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      quote: "The nutrition program helped me grow stronger. Now I can play and learn with my friends.",
      name: "Arjun",
      age: 9,
      image: "https://images.pexels.com/photos/8613311/pexels-photo-8613311.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      quote: "Learning new skills opened doors I never knew existed. I'm building a better future for my family.",
      name: "Meera",
      age: 16,
      image: "https://images.pexels.com/photos/8422144/pexels-photo-8422144.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  ]

  return (
    <div className="app">
      <nav ref={navRef} className="navbar">
        <div className="nav-content">
          <div className="logo">
            <Heart className="logo-icon" />
            <span>DenThinkers Foundation</span>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#initiatives">Initiatives</a>
            <a href="#stories">Stories</a>
            <a href="#contact">Contact</a>
            <button className="donate-btn">Donate</button>
          </div>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src="https://videos.pond5.com/african-poor-children-footage-000362353_main_xxl.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content" ref={heroTextRef}>
          <h1 className="hero-title">DenThinkers Foundation</h1>
          <p className="hero-subtitle">Every Child Deserves the Chance to Dream.</p>
          <div className="hero-cta">
            <button className="cta-primary">Make a Difference</button>
            <button className="cta-secondary">See Our Work</button>
          </div>
        </div>
      </section>

      <section className="video-section" ref={videoSectionRef}>
        <div className="video-container">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Foundation Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="video-caption">This is who we are. This is why we exist.</p>
        </div>
      </section>

      <section className="story-section" id="about" ref={storySectionRef}>
        <div className="story-container">
          <div className="story-images">
            <div className="story-image" style={{ transform: 'rotate(-3deg)' }}>
              <img src="https://images.pexels.com/photos/8422149/pexels-photo-8422149.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Children learning" />
            </div>
            <div className="story-image" style={{ transform: 'rotate(2deg)' }}>
              <img src="https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Community support" />
            </div>
            <div className="story-image" style={{ transform: 'rotate(-2deg)' }}>
              <img src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Happy children" />
            </div>
          </div>
          <div className="story-content">
            <div className="story-text">
              <h2>Who We Are</h2>
              <p className="story-paragraph">
                We are dreamers, believers, and doers. Born from the simple belief that every child deserves a fighting chance, DenThinkers Foundation works tirelessly in communities where hope needs nurturing.
              </p>
              <p className="story-paragraph">
                Our journey began with a single classroom and has grown into a movement of change. We don't just provide resources; we build relationships, foster dreams, and create lasting impact.
              </p>
              <div className="founder-quote">
                <p>"A society grows great when old men plant trees whose shade they know they shall never sit in."</p>
                <span className="quote-author">— Foundation Belief</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section" id="initiatives">
        <h2 className="section-title">What We Do</h2>
        <div className="marquee-wrapper" ref={marqueeRef}>
          <div className="marquee-content">
            {[...initiatives, ...initiatives].map((initiative, index) => (
              <div key={index} className="marquee-item">
                <img src={initiative.image} alt={initiative.title} />
                <div className="marquee-overlay"></div>
                <div className="marquee-text">
                  <div className="marquee-icon">{initiative.icon}</div>
                  <h3>{initiative.title}</h3>
                  <p>{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="carousel-section" id="stories" ref={carouselRef}>
        <h2 className="section-title">Impact Stories</h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {stories.map((story, index) => (
              <div key={index} className="carousel-slide">
                <img src={story.image} alt={story.name} />
                <div className="carousel-overlay"></div>
                <div className="carousel-content">
                  <p className="carousel-quote">"{story.quote}"</p>
                  <div className="carousel-info">
                    <span className="carousel-name">{story.name}</span>
                    <span className="carousel-age">{story.age} years old</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section" ref={ctaSectionRef}>
        <div className="final-cta-image">
          <img src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Children walking" />
          <div className="final-cta-overlay"></div>
        </div>
        <div className="final-cta-content">
          <h2 className="final-cta-title">Be the reason a child smiles today.</h2>
          <div className="final-cta-buttons">
            <button className="cta-primary">Donate Now</button>
            <button className="cta-secondary">Become a Volunteer</button>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-column">
            <h3>DenThinkers Foundation</h3>
            <p className="footer-description">
              Dedicated to nurturing dreams and building futures for children who need it most. Together, we create lasting change.
            </p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#initiatives">Our Initiatives</a>
            <a href="#stories">Success Stories</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <p>Email: info@denthinkers.org</p>
            <p>Phone: +91 123 456 7890</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made with love — for every child who dares to dream.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
