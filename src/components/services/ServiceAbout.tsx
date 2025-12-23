interface ServiceAboutProps {
  title?: string;
  description?: string;
}

const defaultTitle = "Who We Are Who We AreWho We Are";
const defaultDescription = "Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauris massa in suspendisse vulputate ultricies.Lorem ipsum dolor sit amet consectetur. Nullam sit aliquet facilisis in mauris. Viverra at commodo sed nec feugiat adipiscing. Risus pharetra amet velit urna amet etiam fermentum proin sed. In elementum orci tristique mauri";

export default function ServiceAbout({ 
  title = defaultTitle, 
  description = defaultDescription 
}: ServiceAboutProps) {
  return (
    <div className="w-[1280px] h-36 mx-auto flex justify-center items-center gap-2.5 py-20">
      <div className="w-[501px] flex flex-col justify-start items-start gap-3.5">
        <h2 className="self-stretch h-28 text-sky-950 text-4xl font-bold font-['Inter'] leading-[60px]">
          {title}
        </h2>
      </div>
      <div className="flex-1 h-32 text-stone-950 text-base font-normal font-['Inter'] leading-6">
        {description}
      </div>
    </div>
  );
}