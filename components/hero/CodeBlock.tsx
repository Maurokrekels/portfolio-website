'use client';

import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

const code = `
function greet(name: string) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
`;

export default function CodeBlock() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SyntaxHighlighter
                language="typescript"
                style={vscDarkPlus}
                customStyle={{
                    backgroundColor: 'rgba(30, 30, 30, 0.8)',
                    padding: '1.5em',
                    borderRadius: '0.75em',
                    fontSize: '0.95em',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </motion.div>
    );
}
