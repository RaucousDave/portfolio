function Contact() {
  return (
    <div
      id="contact"
      className="bg-[var(--bg-color)] flex justify-center flex-col items-center py-4"
    >
      <h3 className="font-heading text-[var(--primary-accent)] text-5xl mb-[2rem] ">
        Contact
      </h3>
      <form className=" text-white [&>input]:bg-[var(--bg-color)] flex flex-col bg-[hsl(224,19%,5%)] w-[350px] shadow shadow-green-400 py-10 px-7 [&>input]:px-3 [&>input]:py-2 [&>input]:rounded-[10px] rounded-2xl h-[400px] font-body justify-center">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message</label>
        <input type="text" id="message" />
        <div className="flex justify-center items-center mt-10 w-[100%]">
          <a
            href="mailto:daviesenienghan906@gmail.com"
            className="text-black text-center py-2 px-4 rounded-xl w-[150px] bg-[var(--primary-accent)] hover:brightness-90 transition-all duration-300 font-body outline-[var(--primary-accent)]"
          >
            Send Message
          </a>
        </div>
      </form>
    </div>
  );
}

export default Contact;
