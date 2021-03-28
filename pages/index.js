import Head from 'next/head';
import React from "react";
import styles from "../public/styles/Index.module.css";
import Link from "next/link";
import Image from "next/image";
import Carousel from "nuka-carousel";
//import Button from "@material-ui/core/Button";
//import { useRouter } from 'next/router';
//const router = useRouter();
export default function Home() {
  return (
<div>
      <div className={styles.nav}>
        <Image
          src="/images/logo.png"
          alt="Picture of the author"
          width={258}
          height={97}
        />
        <Link href="/index" className={styles.link}>
          首页
        </Link>
        <Link href="#" className={styles.link}>
          量表测试
        </Link>
        <Link href="#" className={styles.link}>
          医疗咨询
        </Link>
        <Link href="#" className={styles.link}>
          名师论坛
        </Link>
        <Link href="#" className={styles.link}>
          医学问答
        </Link>
        <Link href="#" className={styles.link}>
          团体方案
        </Link>
        <Link href="/about" className={styles.link}>
          关于
        </Link>
        <div className={styles.login}>
        {/*  <Button onClick={()=>router.push('/login')}>登录/注册</Button>*/}
          <Link href="/login">
            <span>登录/注册</span>
          </Link>
        </div>
      </div>
      <Carousel autoplay={true} height="100%" initialSlideHeight={500}>
        <img src="/images/big-image1.jpg" alt="Big1" height="500px" />
        <img src="/images/big-image2.jpg" alt="Big2" height="500px" />
      </Carousel>
      <div className={styles.content}>
        <div className={styles.content_title}>
          <div>团体测试方案</div>
        </div>
        <div className={styles.content_cards}>
          <div className={styles.content_card}>
            <img src="/images/card1.png" alt="" />
            <div className={styles.content_card_title}>卒中须知测试计划</div>
            <div className={styles.content_card_content}>
              简易疼痛化量量表SAS,SDS量表
            </div>
          </div>
          <div className={styles.content_card}>
            <img src="/images/card2.png" alt="" />
            <div className={styles.content_card_title}>卒中须知测试计划</div>
            <div className={styles.content_card_content}>
              简易疼痛化量量表SAS,SDS量表
            </div>
          </div>
          <div className={styles.content_card}>
            <img src="/images/card3.png" alt="" />
            <div className={styles.content_card_title}>卒中须知测试计划</div>
            <div className={styles.content_card_content}>
              简易疼痛化量量表SAS,SDS量表
            </div>
          </div>
          <div className={styles.content_card}>
            <img src="/images/card4.png" alt="" />
            <div className={styles.content_card_title}>卒中须知测试计划</div>
            <div className={styles.content_card_content}>
              简易疼痛化量量表SAS,SDS量表
            </div>
          </div>
          <div className={styles.content_card}>
            <img src="/images/card5.png" alt="" />
            <div className={styles.content_card_title}>卒中须知测试计划</div>
            <div className={styles.content_card_content}>
              简易疼痛化量量表SAS,SDS量表
            </div>
          </div>
          {/*
            <div class="content-card">
                <img src="images/card2.png" alt="">
                <div class="content-card-title">VR测试计划</div>
                <div class="content-card-content">简易疼痛化量量表SAS,SDS量表</div>
            </div>
            <div class="content-card">
                <img src="images/card3.png" alt="">
                <div class="content-card-title">医疗患者分类计划</div>
                <div class="content-card-content">简易疼痛化量量表SAS,SDS量表</div>
            </div>
            <div class="content-card">
                <img src="images/card4.png" alt="">
                <div class="content-card-title">胸肌接口训练计划</div>
                <div class="content-card-content">简易疼痛化量量表SAS,SDS量表</div>
            </div>
            <div class="content-card">
                <img src="images/card5.png" alt="">
                <div class="content-card-title">VR训练计划体系</div>
                <div class="content-card-content">简易疼痛化量量表SAS,SDS量表</div>
            </div> */}
        </div>
      </div>
    </div>
  )
}
