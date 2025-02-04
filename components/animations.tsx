"use client"
import { forwardRef } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

const AnimationDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
    function AnimationDiv({ children, ...props }, ref) {
        return (
            <motion.div ref={ref} {...props}>
                {children}
            </motion.div>
        );
    }
);

AnimationDiv.displayName = 'AnimationDiv';

const AnimationP = forwardRef<HTMLParagraphElement, HTMLMotionProps<'p'>>(
    function AnimationP({ children, ...props }, ref) {
        return (
            <motion.p ref={ref} {...props}>
                {children}
            </motion.p>
        );
    }
);

AnimationP.displayName = 'AnimationP';

const AnimationH1 = forwardRef<HTMLHeadingElement, HTMLMotionProps<'h1'>>(
    function AnimationH1({ children, ...props }, ref) {
        return (
            <motion.h1 ref={ref} {...props}>
                {children}
            </motion.h1>
        );
    }
);

AnimationH1.displayName = 'AnimationH1';

export { AnimationDiv, AnimationP, AnimationH1 };