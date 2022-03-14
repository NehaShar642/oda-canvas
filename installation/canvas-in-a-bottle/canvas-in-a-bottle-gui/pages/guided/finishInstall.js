import { useRouter } from 'next/router'
import { Fragment, useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Head from 'next/head'
import Link from 'next/link'

export default function handler(req, res) {
    const router = useRouter()
    var status = router.query['status']

    var logs = JSON.stringify(router.query['logs'])
    console.log(status)
    if (status == "200") {
        return (
            <div className="container">
                <Head>
                    <title>TMF - Canvas in a bottle</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <h1 className="title">
                        Installation sucessfull
                    </h1>

                    <p className="description">
                        Waiting for canvas to become online
                    </p>

                    <div className="grid">

                        <Link href="/admin/kubeDashboard">
                            <a className="card tmfRadiusRed">
                                <h3>Kubernetes Dashboard &rarr;</h3>
                                <p>Go to Kubernetes Dashboard</p>
                            </a>
                        </Link>


                        <a
                            href="/admin/kiali"
                            className="card tmfRadiusLabsInverted"
                        >
                            <h3>Kiali &rarr;</h3>
                            <p>Go to Kiali</p>
                        </a>

                        <Link href="/admin/tmfAPIs">
                            <a className="card tmfRadiusRed">
                                <h3>TMF APIs &rarr;</h3>
                                <p>Go to TMF Reference APIs</p>
                            </a>
                        </Link>
                        <a
                            href="/admin/kiali"
                            className="card tmfRadiusLabsInverted"
                        >
                            <h3>Observability &rarr;</h3>
                            <p>Go to observability</p>
                        </a>

                        {/* <a href="/admin/" className="card tmfRadiusBlue">
                            <h3>TMF APIs &rarr;</h3>
                            <p>Go to TMF Reference APIs</p>
                        </a> */}
                    </div>
                </main>

                <footer>
                    <a
                        href="https://www.tmforum.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <img src="/TMForum_logo_2021.svg" alt="Vercel" className="logo" />
                    </a>
                </footer>

                <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 3em;
        }

        .tmfRadiusRed {
          flex: 0 1 auto;
          width: 330px;
          height: 217px;
          border-radius: 109px 0px 109px 0px;
          padding: 65px 42px 55px 60px;
          font-size: 1em;
          background-color: #e9242c;
          transition-timing-function: cubic-bezier(0.400,0.000,0.200,1.000);
          color: white;
        }

        .tmfRadiusLabs {
          flex: 0 1 auto;
          width: 330px;
          height: 217px;
          border-radius: 109px 0px 109px 0px;
          padding: 65px 42px 55px 60px;
          font-size: 1em;
          background-color: #a1c04e;
          transition-timing-function: cubic-bezier(0.400,0.000,0.200,1.000);
          color: white;
        }
        .tmfRadiusLabsInverted {
          flex: 0 1 auto;
          width: 330px;
          height: 217px;
          border-radius: 0px 109px 0px 109px;          
          padding: 65px 42px 55px 60px;
          font-size: 1em;
          background-color: #a1c04e;
          transition-timing-function: cubic-bezier(0.400,0.000,0.200,1.000);
          color: white;
        }
        .tmfRadiusBlue {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 0 1 auto;
          min-height: 115px;
          max-height: 115px;
          border-radius: 58px 0px 58px 0px;
          padding: 25px 30px 25px 30px;
          font-size: 1em;
          background-color: #0D2548;
          transition-timing-function: cubic-bezier(0.400,0.000,0.200,1.000);
          color: white;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

                <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
            </div>
        )
    }
    else {
        return (
            <div><h4>Installation Error</h4><pre>{logs}</pre></div>
        )
    }


}
