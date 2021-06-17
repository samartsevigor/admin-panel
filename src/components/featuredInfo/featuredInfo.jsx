import React from 'react';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';
import './featuredInfo.css'

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.415</span>
          <span className="featuredMoneyRate">
            -10.5 <ArrowDownward />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4.454</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.023</span>
          <span className="featuredMoneyRate">
            +2.1 <ArrowUpward />
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;