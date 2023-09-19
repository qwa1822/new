import { useEffect, useState } from "react"
import axios from "axios"
import styles from "./App.module.css"

import Footer from "./footer"
import { Route, Routes } from "react-router-dom"
import Issue from "./pages/issue"
import CreateIssue from "./pages/CreateIssue"
import Project from "./pages/Project"
import PullRequiest from "./pages/PullRequest"
import Code from "./pages/Code"
import Security from "./pages/Security"
import Actions from "./pages/Actions"
import Nav from "./components/Nav"
import { Header } from "./headers"

import { QueryClient, QueryClientProvider } from "react-query"

function App() {
  return (
    <>
      <Nav />
      <Header />

      <Routes>
        <Route path="/" element={<Issue />}></Route>
        <Route path="/issue" element={<Issue />}></Route>
        <Route path="/new" element={<CreateIssue />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/pulls" element={<PullRequiest />}></Route>
        <Route path="/code" element={<Code />}></Route>
        <Route path="/security" element={<Security />}></Route>
        <Route path="/actions" element={<Actions />}></Route>
      </Routes>
    </>
  )
}

export default App
