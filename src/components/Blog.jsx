import React, { useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Badge, Button } from './ui';
import imgAPN from '../assets/blog-apn.png';
import imgSIM from '../assets/blog-sim.png';
import imgNBIoT from '../assets/blog-nbiot.png';
import imgPlatforms from '../assets/blog-platforms.png';
import './Blog.css';

const blogData = [
    {
        id: 1,
        readTime: "6 min read",
        title: "What Is an APN? IoT Access Point Names Guide",
        thumbnail: imgAPN,
        theme: "off-white",
        hasVideo: false
    },
    {
        id: 2,
        readTime: "8 min read",
        title: "IoT SIM Management: The Complete Guide",
        thumbnail: imgSIM,
        theme: "off-white",
        hasVideo: false
    },
    {
        id: 3,
        readTime: "5 min read",
        title: "NB-IoT vs LTE-M: Which Is Right for You?",
        thumbnail: imgNBIoT,
        theme: "off-white",
        hasVideo: false
    },
    {
        id: 4,
        readTime: "7 min read",
        title: "IoT Connectivity Platforms: The Enterprise Guide",
        thumbnail: imgPlatforms,
        theme: "off-white",
        hasVideo: false
    }
];

export default function Blog() {
    const scrollRef = useRef(null);

    // Optional: Add drag-to-scroll or button scroll logic here later if needed

    return (
        <section className="blog-section" id="resources">
            <div className="blog-container">

                {/* Left Column: Sticky Title & CTA */}
                <div className="blog-header-col">
                    <Badge variant="light" dot={true} className="blog-section-badge">INSIGHTS & GUIDES</Badge>
                    <h2 className="blog-heading">
                        Blogs
                    </h2>
                    <p className="blog-description">
                        Technical playbooks, architectural guides, and industry strategies to orchestrate global connectivity faster.
                    </p>
                    <Button variant="solid-dark" className="blog-cta" rightIcon={<ArrowRight size={18} />}>
                        All Resources
                    </Button>
                </div>

                {/* Right Column: Horizontal Scroll Cards */}
                <div className="blog-cards-col" ref={scrollRef}>
                    {blogData.map((post) => (
                        <div key={post.id} className={`blog-card theme-${post.theme}`}>

                            {/* Standard Thumbnail Layout */}
                            {post.thumbnail && (
                                <div className="blog-card-thumbnail">
                                    <img src={post.thumbnail} alt={post.title} />
                                </div>
                            )}

                            {/* Card Content Overlay */}
                            <div className="blog-card-content">
                                <h3 className="blog-card-title">{post.title}</h3>

                                <div className="blog-card-footer">
                                    <span className="blog-card-meta">{post.readTime}</span>
                                    <ArrowRight size={20} className="blog-card-arrow" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section >
    );
}
