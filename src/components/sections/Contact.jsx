import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message: ' + (error.message || 'Unknown error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen w-full py-20 flex items-center justify-center relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="glass-card p-10 md:p-16 rounded-3xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your <span className="text-cyan-400">Journey</span></h2>
                    <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                        Ready to orbital launch your digital presence? Initialize the sequence below.
                    </p>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Identify Yourself</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-navy-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" 
                                placeholder="Name or Callsign" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Communication Channel</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-navy-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors" 
                                placeholder="email@sector.com" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full bg-navy-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none" 
                                placeholder="Your message..." 
                            />
                        </div>
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-700 text-navy-900 font-bold rounded-lg transition-colors mt-4"
                        >
                            {isSubmitting ? 'Sending...' : 'Initialize Contact >'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
