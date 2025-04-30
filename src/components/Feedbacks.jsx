import React from 'react';

const Feedbacks = () => {
  const feedbacks = [
    {
      stars: "★★★★★",
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      stars: "★★★★★",
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      stars: "★★★★★",
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white max-w-sm border border-gray-200 flex flex-col p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="text-yellow-400 text-xl mb-2">
                {feedback.stars}
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{feedback.name}</h3>
                <span className="text-gray-400">💬</span>
              </div>
              <p className="text-gray-600 italic">"{feedback.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
