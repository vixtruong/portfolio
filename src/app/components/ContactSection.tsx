import { Mail, Phone, MapPin, Linkedin, Github, FileDown } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-[5%] py-16 bg-gradient-to-r from-indigo-900 to-blue-900 rounded-2xl"
    >
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Thông tin liên hệ */}
          <div className="space-y-6">
            <p className="text-lg">
              Feel free to reach out to me for collaboration, internship
              opportunities, or professional networking. I am open to meaningful
              discussions about{" "}
              <span className="text-blue-400 font-semibold">
                backend development, full-stack projects, and cloud-based
                applications
              </span>
              .
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="text-blue-400" size={20} />
                <a
                  href="tel:+84384077796"
                  className="hover:text-blue-400 transition"
                >
                  +84 384 077 796
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-blue-400" size={20} />
                <a
                  href="mailto:truongleducvi1001@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  truongleducvi1001@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Linkedin className="text-blue-400" size={20} />
                <a
                  href="https://linkedin.com/in/vixtruong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  linkedin.com/in/vixtruong
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Github className="text-blue-400" size={20} />
                <a
                  href="https://github.com/vixtruong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  github.com/vixtruong
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="text-blue-400" size={20} />
                <span>District 7, Ho Chi Minh City, Vietnam</span>
              </li>
            </ul>

            <a
              href="/cv/CV_TruongLeDucVi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-md transition"
            >
              <FileDown size={18} />
              Download CV
            </a>
          </div>

          {/* Form liên hệ nhanh (tùy chọn) */}
          <form className="space-y-4 bg-indigo-950/40 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Send me a message
            </h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-indigo-900/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-indigo-900/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-indigo-900/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
