import React from "react";
import FollowerBox from "../components/FollowerBox";
import { StyledFollowerBox } from "../components/FollowerBox.styled";
import {
    StyledDashboardContainer,
    StyledModeSwitchContainer,
    StyledFollowerContainer,
    StyledStatContainer,
} from "./DashboardContainer.styled";

import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";
import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";
import { StyledStatBox } from "../components/StatBox.styled";
import StatBox from "../components/StatBox";

const DashboardContainer = () => {
    return (
        <StyledDashboardContainer>
            <header>
                <h3>Social Media Dashboard</h3>
                <p>Total Followers: 23,004</p>
                <hr />
            </header>
            <StyledModeSwitchContainer>
                <p>Dark Mode</p>
                <p>O-O</p>
            </StyledModeSwitchContainer>
            <StyledFollowerContainer>
                <FollowerBox
                    socialIcon={facebookIcon}
                    name="@nathanf"
                    number="1987"
                    text="FOLLOWERS"
                    difference="12"
                    arrow={upIcon}
                    socialColor="var(--color-facebook)"
                />
                <FollowerBox
                    socialIcon={twitterIcon}
                    name="@nathanf"
                    number="1044"
                    text="FOLLOWERS"
                    difference="99"
                    arrow={upIcon}
                    socialColor="var(--color-twitter)"
                />
                <FollowerBox
                    socialIcon={instagramIcon}
                    name="@realnathanf"
                    number="11K"
                    text="FOLLOWERS"
                    difference="1099"
                    arrow={upIcon}
                    socialColor="var(--color-instagram)"
                />
                <FollowerBox
                    socialIcon={youtubeIcon}
                    name="Nathan F."
                    number="8239"
                    text="SUBSCRIBERS"
                    difference="144"
                    arrow={downIcon}
                    socialColor="var(--color-youtube)"
                    numbersDown="true"
                />
            </StyledFollowerContainer>
            <h3>Overview - Today</h3>
            <StyledStatContainer>
                <StatBox
                    socialIcon={facebookIcon}
                    number="87"
                    text="Page Views"
                    difference="3"
                    arrow={upIcon}
                />
                <StatBox
                    socialIcon={facebookIcon}
                    number="52"
                    text="Likes"
                    difference="2"
                    arrow={downIcon}
                    numbersDown="true"
                />
                <StatBox
                    socialIcon={instagramIcon}
                    number="5462"
                    text="Likes"
                    difference="2257"
                    arrow={upIcon}
                />
                <StatBox
                    socialIcon={instagramIcon}
                    number="52K"
                    text="Profile Views"
                    difference="1375"
                    arrow={upIcon}
                />
                <StatBox
                    socialIcon={twitterIcon}
                    number="117"
                    text="Retweets"
                    difference="303"
                    arrow={upIcon}
                />
                <StatBox
                    socialIcon={twitterIcon}
                    number="507"
                    text="Likes"
                    difference="553"
                    arrow={upIcon}
                />
                <StatBox
                    socialIcon={youtubeIcon}
                    number="107"
                    text="Likes"
                    difference="19"
                    arrow={downIcon}
                    numbersDown="true"
                />
                <StatBox
                    socialIcon={youtubeIcon}
                    number="1407"
                    text="Total Views"
                    difference="12"
                    arrow={downIcon}
                    numbersDown="true"
                />
            </StyledStatContainer>
        </StyledDashboardContainer>
    );
};

export default DashboardContainer;
