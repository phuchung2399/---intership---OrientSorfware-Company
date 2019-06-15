import React, { Component } from 'react'
import ContentHeader from './content/contentHeader'
import ContentList from './content/contentList'
const contentHeader = {
    status: 'What People Are Saying',
    title: 'And a final subheading about our clients'
}
const listContent = [
    {
        image: 'https://html5up.net/uploads/demos/halcyonic/images/pic06.jpg',
        status: 'Neque nisidapibus mattis',
        title: 'Jane Doe, CEO of UntitledCorp'
    },
    {
        image: 'https://html5up.net/uploads/demos/halcyonic/images/pic07.jpg',
        status: 'Lorem ipsum consequat!',
        title: 'John Doe, President of FakeBiz'
    },
    {
        image: 'https://html5up.net/uploads/demos/halcyonic/images/pic08.jpg',
        status: 'Magna veroeros amet tempus',
        title: 'Mary Smith, CFO of UntitledBiz'
    }
]
export default class ContentRight extends Component {
    render() {
        return (
            <div class="col-4 col-6-medium col-12-small">
                <section class=" section">
                    <ContentHeader contentHeader={contentHeader} />
                    <ul class="quote-list">
                        {listContent.map((contentList, key) => {
                            return (
                                <ContentList key={key} contentList={contentList} />
                            )
                        })}
                    </ul>
                </section>
            </div>
        )
    }
}
