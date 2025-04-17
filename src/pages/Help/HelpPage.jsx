import React from 'react';

const HelpPage = () => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Jese Leos"
                />
                <div>
                  <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                    Jese Leos
                  </a>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Graphic Designer, educator & CEO Flowbite
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      Feb. 8, 2022
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              Best practices for successful prototypes
            </h1>
          </header>

          <p className="lead">
            Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It
            also includes interactive elements such as dropdowns, modals, datepickers.
          </p>

          <p>
            Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can
            think things through before committing to an actual design project.
          </p>

          <p>
            But then I found a{' '}
            <a href="https://flowbite.com" className="text-blue-600 hover:underline dark:text-blue-500">
              component library based on Tailwind CSS called Flowbite
            </a>
            . It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements,
            and more which are conveniently built with the utility classes from Tailwind CSS.
          </p>

          <figure className="my-6">
            <img
              src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
              alt="Digital art"
              className="w-full rounded-lg"
            />
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
              Digital art by Anonymous
            </figcaption>
          </figure>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-4">Getting started with Flowbite</h2>
          <p>
            First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is
            a set of components based on Tailwind CSS that you can just copy-paste from the documentation.
          </p>

          <p>
            It also includes a JavaScript file that enables interactive components, such as modals, dropdowns, and
            datepickers which you can optionally include into your project via CDN or NPM.
          </p>

          <p>
            You can check out the{' '}
            <a
              href="https://flowbite.com/docs/getting-started/quickstart/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              quickstart guide
            </a>{' '}
            to explore the elements by including the CDN files into your project. But if you want to build a project with
            Flowbite I recommend you to follow the build tools steps so that you can purge and minify the generated CSS.
          </p>

          <p>
            You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help you get
            started with your projects even faster. You can check out this{' '}
            <a
              href="https://flowbite.com/docs/components/tables/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              comparison table
            </a>{' '}
            to better understand the differences between the open-source and pro version of Flowbite.
          </p>

          <h2 className="text-2xl font-bold dark:text-white mt-6 mb-4">When does design come in handy?</h2>
          <p>
            While it might seem like extra work at a first glance, here are some key moments in which prototyping will
            come in handy:
          </p>

          <ol className="my-4 list-decimal pl-6 space-y-2">
            <li>
              <strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your
              intended user journey and buy something from the site you've designed? By running a usability test, you'll
              be able to see how users will interact with your design once it's live;
            </li>
            <li>
              <strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly?
              Pass your prototype to your data protection team and they can test it for real;
            </li>
            <li>
              <strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your
              client with a hands-on experience;
            </li>
            <li>
              <strong>Communicating your vision</strong>. By using an interactive medium to preview and test design
              elements, designers and developers can understand each other — and the project — better.
            </li>
          </ol>

          <h3 className="text-xl font-bold dark:text-white mt-6 mb-4">Laying the groundwork for best design</h3>
          <p>
            Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can
            think things through before committing to an actual design project.
          </p>

          <p>
            Let's start by including the CSS file inside the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">head</code> tag of your
            HTML.
          </p>

          <h3 className="text-xl font-bold dark:text-white mt-6 mb-4">Understanding typography</h3>
          <h4 className="text-lg font-bold dark:text-white mt-4 mb-2">Type properties</h4>
          <p>
            A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters.
            A typeface represents shared patterns across a collection of letters.
          </p>

          <h4 className="text-lg font-bold dark:text-white mt-4 mb-2">Baseline</h4>
          <p>
            A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters.
            A typeface represents shared patterns across a collection of letters.
          </p>

          <h4 className="text-lg font-bold dark:text-white mt-4 mb-2">Measurement from the baseline</h4>
          <p>
            A typeface is a collection of letters. While each letter is unique, certain shapes are shared across letters.
            A typeface represents shared patterns across a collection of letters.
          </p>

          <h3 className="text-xl font-bold dark:text-white mt-6 mb-4">Type classification</h3>
          <h4 className="text-lg font-bold dark:text-white mt-4 mb-2">Serif</h4>
          <p>
            A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter. Typefaces
            with serifs are called serif typefaces. Serif fonts are classified as one of the following:
          </p>

          <h4 className="text-lg font-bold dark:text-white mt-4 mb-2">Old-Style serifs</h4>
          <ul className="my-4 list-disc pl-6 space-y-2">
            <li>Low contrast between thick and thin strokes</li>
            <li>Diagonal stress in the strokes</li>
            <li>Slanted serifs on lower-case ascenders</li>
          </ul>

          <img
            src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png"
            alt="Typography example"
            className="w-full rounded-lg my-4"
          />

          <ol className="my-4 list-decimal pl-6 space-y-2">
            <li>Low contrast between thick and thin strokes</li>
            <li>Diagonal stress in the strokes</li>
            <li>Slanted serifs on lower-case ascenders</li>
          </ol>

          <h3 className="text-xl font-bold dark:text-white mt-6 mb-4">Laying the best for successful prototyping</h3>
          <p>A serif is a small shape or projection that appears at the beginning:</p>

          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen
              to complex dashboard. Perfect choice for your next SaaS application.
            </p>
          </blockquote>

          <h4 className="text-lg font-bold dark:text-white mt-4 mb-2">Code exampl</h4>
          <p>
            A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter. Typefaces
            with serifs are called serif typefaces. Serif fonts are classified as one of the following:
          </p>

          <h4 className="text-lg font-bold dark:text-white mt-4 mb-2">Table example</h4>
          <p>
            A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Country
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Date &amp; Time
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">United States</td>
                  <td className="px-4 py-3">April 21, 2021</td>
                  <td className="px-4 py-3">
                    <strong>$2,300</strong>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">Canada</td>
                  <td className="px-4 py-3">May 31, 2021</td>
                  <td className="px-4 py-3">
                    <strong>$300</strong>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">United Kingdom</td>
                  <td className="px-4 py-3">June 3, 2021</td>
                  <td className="px-4 py-3">
                    <strong>$2,500</strong>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">Australia</td>
                  <td className="px-4 py-3">June 23, 2021</td>
                  <td className="px-4 py-3">
                    <strong>$3,543</strong>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">Germany</td>
                  <td className="px-4 py-3">July 6, 2021</td>
                  <td className="px-4 py-3">
                    <strong>$99</strong>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3">France</td>
                  <td className="px-4 py-3">August 23, 2021</td>
                  <td className="px-4 py-3">
                    <strong>$2,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold dark:text-white mt-6 mb-4">Best practices for setting up your prototype</h3>
          <p>
            <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how close a prototype will be to the real
            deal. If you're simply preparing a quick visual aid for a presentation, a low-fidelity prototype — like a
            wireframe with placeholder images and some basic text — would be more than enough. But if you're going for
            more intricate usability testing, a high-fidelity prototype — with on-brand colors, fonts and imagery —
            could help get more pointed results.
          </p>

          <p>
            <strong>Consider your user</strong>. To create an intuitive user flow, try to think as your user would when
            interacting with your product. While you can fine-tune this during beta testing, considering your user's
            needs and habits early on will save you time by setting you on the right path.
          </p>

          <p>
            <strong>Start from the inside out</strong>. A nice way to both organize your tasks and create more
            user-friendly prototypes is by building your prototypes 'inside out'. Start by focusing on what will be
            important to your user, like a Buy now button or an image gallery, and list each element by order of
            priority. This way, you'll be able to create a prototype that puts your users' needs at the heart of your
            design.
          </p>

          <p>
            And there you have it! Everything you need to design and share prototypes — right in Flowbite Figma.
          </p>
        </article>
      </div>
    </main>
  );
};

export default HelpPage;