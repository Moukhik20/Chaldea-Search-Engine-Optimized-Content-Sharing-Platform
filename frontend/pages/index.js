import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <article className='overflow-hidden'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h1 className='display-4 font-weight-bold'>CHALDEA BLOGS</h1>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center pt-4 pb-5'>
              <p className='lead'>
                Blogs on all topics from lifestyle, entertainment, business to
                sports.
              </p>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='flip flip-horizontal'>
                <div
                  className='front'
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")",
                  }}
                >
                  <h2 className='text-shadow text-center h1'>React</h2>
                </div>
                <div className='back text-center'>
                  <Link href='/categories/React'>
                    <a>
                      <h3 className='h1'>React Js</h3>
                    </a>
                  </Link>
                  <p className='lead'>
                    The world's most popular frontend web development library
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='flip flip-horizontal'>
                <div
                  className='front'
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://cdn.wallpapersafari.com/5/58/mIbEy0.jpg" +
                      ")",
                  }}
                >
                  <h2 className='text-shadow text-center h1'>Catone</h2>
                </div>
                <div className='back text-center'>
                  <Link href='/categories/catone'>
                    <a>
                      <h3 className='h1'>Catone</h3>
                    </a>
                  </Link>
                  <p className='lead'>
                    This leads to blogs with categories catone.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='flip flip-horizontal'>
                <div
                  className='front'
                  style={{
                    backgroundImage:
                      "url(" + "https://wallpaper.dog/large/20459082.jpg" + ")",
                  }}
                >
                  <h2 className='text-shadow text-center h1'>Another</h2>
                </div>
                <div className='back text-center'>
                  <Link href='/categories/another'>
                    <a>
                      <h3 className='h1'>Another Category</h3>
                    </a>
                  </Link>
                  <p className='lead'>
                    This leads to blogs with categories another.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
