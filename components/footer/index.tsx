import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-secondary/10 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div />
                    <div className="flex space-x-4">
                        <Link href="https://github.com/MauroKrekels" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl text-muted-foreground hover:text-primary transition-colors" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/mauro-krekels-9948b12b9/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl text-muted-foreground hover:text-primary transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
