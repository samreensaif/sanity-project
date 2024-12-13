import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

interface TestimonialItem {
  para1: string;
  para2: string;
  heading: string;
  heroPic: string;
}

async function Testimonial() {
  let testimonials: TestimonialItem[] = [];

  try {
    testimonials = await client.fetch(
      `*[_type == 'testimonial']{
        "heroPic": heroPic.asset->url,
        para1,
        para2,
        heading
      }`
    );
  } catch (error) {
    console.error('Error fetching testimonials:', error);
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* Card */}
          {testimonials.map((item, index) => (
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={index}>
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={item.heroPic}
                  width={200}
                  height={200}
                />
                <p className="leading-relaxed">{item.para1}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {item.heading}
                </h2>
                <p className="text-gray-500">{item.para2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
