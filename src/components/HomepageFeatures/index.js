import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Empower Your Creativity',
    Svg: require('@site/static/img/no_image.svg').default,
    description: (
      <>
        Empower Your Network and Brand.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/autheo_logo.svg').default,
    description: (
      <>
        A Next-Generation Blockchain Platform for
        Creators, Developers and Organizations.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/no_image.svg').default,
    description: (
      <>
        Revolutionizing Building and
        Monetizing Ecosystems.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
