import about1 from './assets/about/about1.webp' ;
import about2 from './assets/about/about2.webp' ;


const About = () => {
  return (
    <section className="about">
      <div className="about-header py-24 mb-20">
        <h1 className="text-center text-4xl font-bold text-white"> Blog </h1>
      </div>

      <div className="container">
        <div className="parent">
          <div className="box flex flex-wrap ">
            <div className="info md:w-2/3 w-full pr-20 mb-8">
              <h1 className="text-3xl mb-6 font-bold font-sans text-gray-800">Our Story </h1>
              <p className="text-gray-400 my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
              </p>
              <p className="text-gray-400 my-8">
              Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
              </p>
              <p className="text-gray-400 my-8">
              Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
            </div>
            <div className="pic md:w-1/3 w-4/5 mx-auto overflow-hidden">
              <img src={about1} className="w-full hover:scale-110 transform duration-1000" />
            </div>
          </div>

          <div className="box flex flex-wrap-reverse	my-16">
          <div className="pic md:w-1/3 w-4/5 mx-auto overflow-hidden">
              <img src={about2} className="w-full hover:scale-110 transform duration-1000" />
            </div>
            <div className="info md:w-2/3 w-full sm:pl-0 md:pl-20 mb-8">
              <h1 className="text-3xl mb-6 font-bold font-sans text-gray-800">Our Mission </h1>
              <p className="text-gray-400 my-8">
              Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
              </p>
              <p className="text-gray-400 my-8 pl-6 border-l-4">
              Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
              <p className="text-gray-400 mt-4 font-bold"> - Steve Job’s </p>
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
 
export default About;