import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motion';
import { instagramPosts } from '../data/instagramPosts';
import InstagramPostCard from './InstagramPostCard';

const InstagramPostGrid = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={staggerContainer}
    // Masonry-style columns rather than a strict grid — real embeds render at very different
    // heights (a single photo vs. a long caption), and a uniform grid would either crop them
    // or leave large gaps next to shorter cards.
    className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6 [&>*]:break-inside-avoid"
  >
    {instagramPosts.map((post, index) => (
      <InstagramPostCard key={post.id} post={post} index={index} />
    ))}
  </motion.div>
);

export default InstagramPostGrid;
