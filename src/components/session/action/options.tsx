import { useStudySession } from "@/hooks/sessions/study";
import { Option } from "@/interfaces/option";

export default function OptionsAction() {
  const { options, selectOption } = useStudySession();

  return (
    <div className="flex items-center justify-center w-full">
      {options.map((o: Option) => (
        <div key={o.id} className="px-4 w-full">
          <button
            className="mx-auto text-center my-8 px-8 py-4 leading-5 w-full text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={() => {
              selectOption(o.id);
            }}
          >
            {o.name}
          </button>
        </div>
      ))}
    </div>
  );
}
