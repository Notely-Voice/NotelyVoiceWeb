import Button from "../ui/Button";

export const UseCases = {
  students: (
    <div>
      <h2 className="text-2xl sm:text-3xl tracking-[-3%] uppercase font-varien text-[#3E45FB] mb-1.5">
        For Students
      </h2>
      <p className="mb-10 font-bold text-base sm:text-xl  tracking-[-6%] lg:max-w-[390px]">
        Never miss a lecture again. Record classes, get instant transcripts, and
        focus on learning instead of note-taking.
      </p>
      <Button btnText="Try for free now!" />
    </div>
  ),

  creators: (
    <div>
      <h2 className="text-2xl sm:text-3xl tracking-[-3%] uppercase font-varien text-[#3E45FB] mb-1.5">
        For Creators
      </h2>
      <p className="mb-10 font-bold text-base sm:text-xl  tracking-[-6%] lg:max-w-[390px]">
        Turn interviews and recordings into searchable text. Generate show
        notes, quotes, and subtitles in minutes. Repurpose content faster than
        ever.
      </p>
      <Button btnText="Try for free now!" />
    </div>
  ),

  teams: (
    <div>
      <h2 className="text-2xl sm:text-3xl tracking-[-3%] uppercase font-varien text-[#3E45FB] mb-1.5">
        For teams
      </h2>
      <p className="mb-10 font-bold text-base sm:text-xl  tracking-[-6%] lg:max-w-[390px]">
        Capture every meeting detail automatically. Share accurate transcripts
        with your team, track action items, and keep everyone aligned.
      </p>
      <Button btnText="Try for free now!" />
    </div>
  ),

  accessibility: (
    <div>
      <h2 className="text-2xl sm:text-3xl tracking-[-3%] uppercase font-varien text-[#3E45FB] mb-1.5">
        For Accessibility
      </h2>
      <p className="mb-10 font-bold text-base sm:text-xl  tracking-[-6%] lg:max-w-[390px]">
        Make content accessible to everyone. Generate accurate captions and
        transcripts for videos, presentations, and live events.
      </p>
      <Button btnText="Try for free now!" />
    </div>
  ),

  journalist: (
    <div>
      <h2 className="text-2xl sm:text-3xl tracking-[-3%] uppercase font-varien text-[#3E45FB] mb-1.5">
        For Journalist
      </h2>
      <p className="mb-10 font-bold text-base sm:text-xl  tracking-[-6%] lg:max-w-[390px]">
        Interview with confidence. Record conversations and get word-for-word
        transcripts instantly. Verify quotes and write stories faster.
      </p>
      <Button btnText="Try for free now!" />
    </div>
  ),
};
