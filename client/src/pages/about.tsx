import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simple Sip: From Kitchen Chaos to Matcha Zen
          </h1>
        </motion.div>
        
        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hey there, fellow matcha lovers! Ever found yourself dreaming of that vibrant green goodness, only to groan at the thought of the messy whisking, the clunky tools, and the precious minutes ticking away? Yeah, we've been there too. And honestly, we got tired of it.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It all started with a simple obsession: <strong>matcha</strong>. We loved the taste, the calm energy, the ritual. But let's be real, the "ritual" often felt more like a chore. Picture this: late-night study sessions, early morning rushes, or just trying to enjoy a peaceful afternoon – and every time, making matcha involved a cluttered counter, a splash here, a sprinkle there, and a sink full of specialized tools. It was a delicious drink, but a surprisingly high-maintenance friend!
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We were always thinking, "There has to be an <strong>easier, faster, mess-free</strong> way to enjoy this magic."
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              So, fueled by a passion for efficiency (and a serious craving for a spill-free caffeine kick), we rolled up our sleeves. We tinkered, we experimented, we probably made a few more messes in the process (ironic, right?). We challenged ourselves: could we create something <strong>portable, powerful, and ridiculously easy to use?</strong> Something that transforms the "ugh" of matcha prep into a delightful "ahh"?
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The answer, after countless prototypes and endless cups of green tea, is <strong>Simple Sip</strong>. It's our love letter to everyone who wants to savor their matcha moment without the traditional hassle. It's born from the simple desire to make life a little greener, a little calmer, and a whole lot less messy.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With <strong>Simple Sip</strong>, you can now whisk up a perfect, delicious cup of hot or cold matcha anywhere – at school, at the park, or even just lounging on your couch – all with a simple button press or a quick voice command. No more fumbling, no more spills, just pure matcha joy, simplified.
            </p>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-semibold text-matcha-dark bg-white p-6 rounded-xl shadow-md border-2 border-matcha-light">
                Join us on this journey from matcha mess to matcha magic. Because your perfect cup should be as <strong>Simple</strong> as a <strong>Sip</strong>!
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-matcha-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">Making matcha accessible and enjoyable for everyone, everywhere.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-matcha-medium rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Innovation</h3>
            <p className="text-gray-600">Combining traditional matcha with modern convenience and technology.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-matcha-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Promise</h3>
            <p className="text-gray-600">Quality, simplicity, and the perfect cup of matcha, every time.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
