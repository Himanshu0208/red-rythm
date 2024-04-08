export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-4xl font font-semibold text-center my-7'>
            About Cycle Sync
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
          <p>Welcome to Cycle Sync, a platform dedicated to fostering open dialogue and sharing knowledge about menstrual health and well-being. At Cycle Sync, we believe in breaking the silence surrounding menstruation and empowering individuals to understand and embrace their bodies natural rhythms.</p>

          <h3 className="font-semibold text-2xl">Our Mission</h3>
          <p>Cycle Sync was founded with a mission to provide a safe, supportive, and informative space for individuals of all genders to explore and discuss topics related to the menstrual cycle. We aim to challenge stigma, promote menstrual hygiene, and advocate for menstrual equity through education, advocacy, and community engagement.</p>

          <h3 className="font-semibold text-2xl">What We Offer</h3>
          <ul className="flex flex-col gap-[40px]">
            <li className="flex flex-col"><span className="text-lg font-medium">Informative Blogs</span> Dive into our collection of insightful blogs written by our community members and experts in the field. Explore a wide range of topics, from menstrual health tips and period care to reproductive anatomy and menstrual product reviews.</li>
            <li className="flex flex-col"><span className="text-lg font-medium">Engaging Discussions</span> Join our vibrant discussion forum to connect with peers, ask questions, share experiences, and provide support in a judgment-free environment. Whether you&apos;re seeking advice, sharing your story, or simply looking for solidarity, our community is here for you.</li>
            <li className="flex flex-col"><span className="text-lg font-medium">Personalized Analytics</span> Take control of your menstrual health journey with our personalized analytics feature. By providing basic information about your menstrual cycle, you can access valuable insights such as cycle length, average duration, and predicted period dates. Stay informed and empowered to manage your menstrual cycle with confidence.</li>
          </ul>

          <h3 className="font-semibold text-2xl">Our Commitment</h3>
          <p >At Cycle Sync, we are committed to inclusivity, diversity, and accessibility. We strive to create a welcoming space where all individuals feel respected, valued, and heard. We prioritize accuracy, reliability, and evidence-based information in all our content, ensuring that our community members have access to trustworthy resources for their menstrual health needs.</p>

          <h3 className="font-semibold text-2xl">Join Our Community</h3>
          <p>Whether you&apos;re here to learn, share, or connect, we invite you to become a part of the Cycle Sync community. Together, let&apos;s break the stigma, celebrate our bodies, and embrace the beautiful rhythm of menstruation.</p>

          </div>
        </div>
      </div>
    </div>
  );
}
