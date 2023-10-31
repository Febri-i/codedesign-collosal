import CollosalTitle from "~/components/genericComponent/CollosalTitle";
import GenericExplanation from "~/components/genericComponent/GenericExplanation";

export default function Index() {
  return (
    <>
      <CollosalTitle title="Send A Qupte" />
      <GenericExplanation
        reverse
        action={{ label: "Ask Us", cb: () => {} }}
        title="SEND QUOTE"
        heading="Tell us about your problem and how we can help"
        detail="We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond."
      >
        <form>
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
          <div>
            <label for="companyName">
              <p>Company Name</p>
              <input type="text" name="companyName" id="companyName" />
            </label>
            <label for="companySize">
              <p>Company Size</p>
              <select name="companySize" id="companySize">
                <option value="hheheh">XXXXL EXTREMELY LARGE</option>
              </select>
            </label>
          </div>
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
            Send Quote
          </button>
        </form>
      </GenericExplanation>
    </>
  );
}
