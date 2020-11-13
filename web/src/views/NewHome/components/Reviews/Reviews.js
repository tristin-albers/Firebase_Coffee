import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { CardReview } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {},
  swiperContainer: {
    width: '100%',
    maxWidth: 500,
  },
}));

const Reviews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  React.useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
      },
    });
  });

  return (
    <div className={clsx(classes.root, className)} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="Take a look what our customers say"
        subtitle="Here is what some others had to say about our products."
      />
      <div className={clsx('swiper-container', classes.swiperContainer)}>
        <div className="swiper-wrapper">
          {data.map((item, index) => (
            <CardReview
              key={index}
              className={'swiper-slide'}
              noBorder
              noShadow
              text={item.feedback}
              icon={
                <IconAlternate
                  color={colors.indigo}
                  fontIconClass="fas fa-quote-right"
                />
              }
              authorName={item.authorName}
              authorTitle={item.authorOccupation}
              authorPhoto={item.authorPhoto}
            />
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Reviews;
