import React, { Component } from 'react';
import JobList from '../components/JobList';
import Search from './Search';
import './ExploreJobs.css';

class ExploreJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: null,
      totalMatches: this.props.jobs.length
    };
  }

  getMatches(searchterm) {
    const searchValue = new RegExp(searchterm, 'i');
    const matches = this.props.jobs.filter(job => job.title.match(searchValue) || job.location.match(searchValue) || job.description.match(searchValue));
    this.setState({
      searchResult: matches,
      totalMatches: matches.length
    });
  }
  render() {
    return (
      <section className=".ExploreJobs">
        <h1 className="ExploreJobs-title">Explore Jobs</h1>
        <Search getSearch={value => this.getMatches(value)} />
        <JobList jobs={!this.state.searchResult ? this.props.jobs : this.state.searchResult} />
        <div className="ExploreJobs-matches">
          <span>
            Found {this.state.totalMatches} matches
          </span>
        </div>
      </section>
    );
  }
}

export default ExploreJobs;
