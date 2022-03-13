export type NewsType = {
    datePublished: string;
    name: string;
    description: string;
    url: string;
    _type: string;
    image: NewsImageType;
    mentions: NewsMention[];
    provider: NewsProviderType[];
    about?: NewsAboutType[];
    category?: string;
}

type NewsImageType = {
    thumbnail: NewsImageThumbnailType,
    _type: string;
}

type NewsImageThumbnailType = {
    contentUrl: string;
    width: number;
    height: number;
    _type: string;
}

type NewsMention = {
    _type: string;
    name: string;
}

type NewsProviderType = {
    image: NewsImageType;
    _type: string;
    name: string;
}

type NewsAboutType = {
    _type: string;
    readLink: string;
}