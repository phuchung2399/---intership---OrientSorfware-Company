import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


const Home = React.lazy(() => import('./homePage/homePage'));
const OneColumn = React.lazy(() => import('./page/OneColumn/OneColumn'));
const TwoColumn1 = React.lazy(() => import('./page/TwoColumn1/TwoColumn1'));
const TwoColumn2 = React.lazy(() => import('./page/TwoColumn2/TwoColumn2'));
const ThreeColumn = React.lazy(() => import('./page/ThreeColumn/ThreeColumn'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
export default class body extends Component {
    render() {

        let articleContent = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam metus, congue vel suscipit ut, dignissim non risus. Vestibulum ante est, fringilla nec placerat eu, vestibulum vitae diam. Integer eget egestas eros. Duis enim erat, mollis quis lacinia eget, blandit nec ipsum. Donec vitae turpis ipsum. Aliquam mauris libero, sagittis in eleifend at, mattis imperdiet velit. Donec urna risus, rutrum molestie varius ac, lacinia sit amet augue. Nam ultrices elementum eros.</p><p>Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum hendrerit congue nec eu risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum elit. Suspendisse fermentum adipiscing nisi, a tempor libero malesuada at. Morbi lacinia dui adipiscing risus eleifend tincidunt. Proin eu mauris eu tellus eleifend hendrerit.</p><p> Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio mi rhoncus arcu, quis euismod felis felis et velit. Mauris varius consectetur erat egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor. </p> <p>Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum hendrerit congue nec eu risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum elit. Suspendisse fermentum adipiscing nisi, a tempor libero malesuada at. Morbi lacinia dui adipiscing risus eleifend tincidunt. Proin eu mauris eu tellus eleifend hendrerit.</p><p>Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio mi rhoncus arcu, quis euismod felis felis et velit. Mauris varius consectetur erat egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor.</p>'

        let fourLinks = [
            { title: 'Sed dolore viverra', href: '#' },
            { title: 'Ligula non varius', href: '#' },
            { title: 'Dis parturient montes', href: '#' },
            { title: 'Nascetur ridiculus', href: '#' },
        ];

        let sixLinks = fourLinks.concat([
            { title: 'Dis parturient montes', href: '#' },
            { title: 'Nascetur ridiculus', href: '#' }
        ]);

        let ipsumDolor = {
            title: 'Ipsum Dolor',
            description: 'Vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat.',
            listLinks: fourLinks
        };

        let magnaPhasellus = {
            title: 'Magna Phasellus',
            listLinks: sixLinks
        };
        //---------------------//
        let bodyContent = {
            oneColumn: { title: 'One Column', description: 'A generic one column layout', content: articleContent },
            twoColumn1: {
                ipsumDolor: ipsumDolor,
                magnaPhasellus: magnaPhasellus,
                column: { title: 'Two Column #1', description: 'A generic two column layout', content: articleContent }
            },
            twoColumn2: {
                ipsumDolor: ipsumDolor,
                magnaPhasellus: magnaPhasellus,
                column: { title: 'Two Column #2', description: 'Another generic two column layout', content: articleContent }
            },

            threeColumn: {
                ipsumDolor: ipsumDolor,
                magnaPhasellus: magnaPhasellus,
                column: {
                    title: 'Three Column',
                    description: 'A generic one column layout',
                    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam metus, congue vel suscipit ut, dignissim non risus. Vestibulum ante est, fringilla nec placerat eu, vestibulum vitae diam. Integer eget egestas eros. Duis enim erat, mollis quis lacinia eget, blandit nec ipsum. Donec vitae turpis ipsum. Aliquam mauris libero, sagittis in eleifend at, mattis imperdiet velit. Donec urna risus, rutrum molestie varius ac, lacinia sit amet augue. Nam ultrices elementum eros.</p><p>Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum hendrerit congue nec eu risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum elit. Suspendisse fermentum adipiscing nisi, a tempor libero malesuada at. Morbi lacinia dui adipiscing risus eleifend tincidunt. Proin eu mauris eu tellus eleifend hendrerit.</p><p> Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio mi rhoncus arcu, quis euismod felis felis et velit. Mauris varius consectetur erat egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor. </p> <p>Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum hendrerit congue nec eu risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum elit. Suspendisse fermentum adipiscing nisi, a tempor libero malesuada at. Morbi lacinia dui adipiscing risus eleifend tincidunt. Proin eu mauris eu tellus eleifend hendrerit.</p><p>Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio mi rhoncus arcu, quis euismod felis felis et velit. Mauris varius consectetur erat egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor.</p>'
                }
            }
        }
        return (
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>

                        <Route exact path="/" render={props => <Home {...props} />} />
                        <Route path="/ThreeColumn" render={props => <ThreeColumn body={bodyContent.threeColumn} {...props} />} />
                        <Route path="/TwoColumnOne" render={props => <TwoColumn1 body={bodyContent.twoColumn1} {...props} />} />
                        <Route path="/TwoColumnTwo" render={props => <TwoColumn2 body={bodyContent.twoColumn2} {...props} />} />
                        <Route path="/OneColumn" render={props => <OneColumn body={bodyContent.oneColumn} {...props} />} />

                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }
}