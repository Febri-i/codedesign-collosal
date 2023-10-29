import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import CardIconSM from "~/components/genericComponent/IconCard/CardIconSM";

export default function Contact() {
  return (
    <>
      <CollosalTitle title="Contact" />
      <div class="flex  portrait:items-center portrait:flex-col portrait:gap-5 landscape:gap-[6.88rem] justify-between">
        <div>
          <h5>Contact</h5>
          <h1>We love receiving messages from you, we are waiting for it.</h1>
          <div class="flex flex-col gap-[1.87rem] mt-[3.12rem]">
            <CardIconSM
              value="+62 1234 8921"
              key="Phone"
              src="/icons/phonecall.svg"
            />
            <CardIconSM
              src="/icons/email.svg"
              value="support@collosal.tld"
              key="Email"
            />
          </div>
        </div>
        <div>
          <form class="shadow-md">
            <div>
              <label for="name">
                <p>Name</p>
                <input type="text" name="name" id="name" />
              </label>
              <label for="email">
                <p>Email</p>
                <input type="email" name="email" id="email" />
              </label>
            </div>
            <label for="subject">
              <p>Subject</p>
              <input type="text" name="subject" id="subject" />
            </label>
            <label for="quote">
              <p>Tell Us Your Problem</p>
              <textarea
                class="resize-none"
                name="quote"
                id="quote"
                rows="5"
              ></textarea>
            </label>
            <button class="btn-lg btn-primary" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
