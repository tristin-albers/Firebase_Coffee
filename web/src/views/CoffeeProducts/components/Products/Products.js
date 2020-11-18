import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  colors,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    boxShadow: '0 9px 18px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(2),
  },
  cardMedia: {
    height: 290,
    padding: theme.spacing(3, 3, 0, 3),
    position: 'relative',
    background: colors.indigo[50],
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  image: {
    objectFit: 'contain',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  hearIconContainer: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(3),
  },
  ratingContainer: {
    margin: theme.spacing(2, 0),
  },
  ratingIcon: {
    color: colors.yellow[700],
    marginRight: theme.spacing(1 / 2),
  },
  priceCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Products = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const rating = count => {
    const ratingArray = [];
    for (let i = 1; i <= 5; i += 1) {
      ratingArray.push(
        <i
          className={clsx(
            i <= count ? 'fas fa-star' : 'far fa-star',
            classes.ratingIcon,
          )}
          key={i}
        />,
      );
    }

    return ratingArray;
  };

  

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="Featured products"
        data-aos="fade-up"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia}>
                <Image
                  {...item.image}
                  alt={item.title}
                  className={classes.image}
                  lazyProps={{
                    width: '100%',
                    height: '100%',
                  }}
                />
                {/*  keep for possible future implementation of favorites feature */}
                {/* <div className={classes.hearIconContainer}>
                  <IconAlternate
                    fontIconClass="far fa-heart"
                    size="small"
                    shape="circle"
                    color={colors.yellow}
                  />
                </div> */}
              </CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography
                  color="textPrimary"
                  variant="h6"
                  className={classes.fontWeightBold}
                >
                  {item.title}
                </Typography>
                <div className={classes.ratingContainer}>
                  {rating(item.rating)}
                </div>
                <div className={classes.priceCta}>
                  <Typography
                    color="primary"
                    variant="h6"
                    className={classes.fontWeightBold}
                  >
                    {item.price}
                  </Typography>
                  <Button variant="contained" color="primary">
                    quick add
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Products.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Products;
