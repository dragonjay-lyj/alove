import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import starlightImageZoom from 'starlight-image-zoom';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import icon from "astro-icon";
import starlightViewModes from 'starlight-view-modes'
import vercel from "@astrojs/vercel/serverless";
import Icons from 'unplugin-icons/vite';
import commonjs from 'vite-plugin-commonjs';
import vercel from '@astrojs/vercel/serverless';
import starlightHeadingBadges from 'starlight-heading-badges'

// https://astro.build/config
export default defineConfig({
  site: 'https://alove.dragonjay.top',
  integrations: [react(), starlight({
    head: [
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css'
        }
      }
    ],
    plugins: [starlightImageZoom(),starlightViewModes(),starlightHeadingBadges(), starlightUtils({
      components: {
        Head: "./src/components/Head.astro",
      },
      multiSidebar: {
        switcherStyle: "horizontalList"
      }
    })],
    title: {
      'zh-CN': '紧缚',
      en: 'BDSM'
    },
    customCss: [
    // 你的自定义 CSS 文件的相对路径
    'src/styles/custom.css'],
    defaultLocale: 'root',
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN' // lang 是 root 语言必须的
      },
      'en': {
        label: 'English',
        lang: 'en'
      }
    },
    customCss: [
    // 你的 Tailwind 基础样式的相对路径
    './src/tailwind.css'],
    social: {
      github: 'https://github.com/dragonjay-lyj/alove',
      telegram: 'https://t.me/NeilBowM',
    },
    sidebar: [
      {
        label: '褌',
        // 自动生成一个链接分组，用于 '星座' 目录。
        autogenerate: { directory: 'fundoshi' },
      },
      {
        label: '调查问卷',
        // 自动生成一个链接分组，用于 '星座' 目录。
        autogenerate: { directory: 'feedback' },
      },
    ],
  }), tailwind({
    // 禁用默认的基础样式
    applyBaseStyles: false
  }), icon()],
  vite: {
    plugins: [Icons({ compiler: 'astro' }),commonjs()],
  },
  output: "server",
  adapter: vercel(
    {
      webAnalytics: { enabled: true }
    }
  )
});