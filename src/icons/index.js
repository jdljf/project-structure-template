import Vue from "vue"
import IconSvg from "@/components/IconSvg" // svg component

Vue.component("icon-svg", IconSvg)

// 自动导入所有 svg
const req = require.context("./svg", false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
