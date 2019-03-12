import React from "react";
import { Layout, SEO, ProfileImage } from "../components";

const App: React.FC = () => (
    <Layout>
        <SEO />
        <ProfileImage />
        <h1>hello, world!</h1>
    </Layout>
);

export default App;
