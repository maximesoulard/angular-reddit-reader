import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EmbeddedFactory } from './embedded';
import { Post } from './post';
describe('EmbeddedFactory', () => {

  it('should return raw html from post *SECURE MEDIA* object without direct link', (() => {
    // fake response
    const post = require('../../../../test/mock-data/embedded.spec/youtubePost.json');  // FIXME
    const embeddedInstance = EmbeddedFactory.getInstance(post);

    expect(embeddedInstance.getRawHtml()).toBeDefined();
    expect(() => embeddedInstance.getDirectLink()).toThrowError("Method not implemented.");
  }));

  it('should return raw html from *SELF* post without direct link', (() => {
    // fake response
    const post = require('../../../../test/mock-data/embedded.spec/selfPost.json');  // FIXME
    const embeddedInstance = EmbeddedFactory.getInstance(post);

    expect(embeddedInstance.getRawHtml()).toBeDefined();
    expect(() => embeddedInstance.getDirectLink()).toThrowError("Method not implemented.");
  }));

  it('should return direct link from *IMGUR GIF* post without raw html', (() => {
    // fake response
    const post = require('../../../../test/mock-data/embedded.spec/imgurGifPost.json');  // FIXME
    const embeddedInstance = EmbeddedFactory.getInstance(post);

    expect(embeddedInstance.getDirectLink()).toBeDefined();
    expect(() => embeddedInstance.getRawHtml()).toThrowError("No inner html.");
  }));

  it('should return raw html from *GFYCAT GIF* post with secure media embed', (() => {
    // fake response
    const post = require('../../../../test/mock-data/embedded.spec/gfycatPost.json');  // FIXME
    const embeddedInstance = EmbeddedFactory.getInstance(post);

    expect(embeddedInstance.getRawHtml()).toBeDefined();
    expect(() => embeddedInstance.getDirectLink()).toThrowError("Method not implemented.");
  }));

  it('should return direct link from *IREDDIT IMG* post', (() => {
    // fake response
    const post = require('../../../../test/mock-data/embedded.spec/iredditImgPost.json');  // FIXME
    const embeddedInstance = EmbeddedFactory.getInstance(post);

    expect(embeddedInstance.getDirectLink()).toBeDefined();
    expect(() => embeddedInstance.getRawHtml()).toThrowError("Method not implemented.");
  }));
});