import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { theme } from '../../styles/theme';
import * as Styled from './styles';

import { mapData } from '../../api/map-data';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import {
  SECTION_CONTENT,
  SECTION_GRID_IMAGE,
  SECTION_GRID_TEXT,
  SECTION_TWO_COLUMNS,
} from '../../utils/constants';

import { Heading } from '../../components/Heading';
import { Loading } from '../../components/Loading';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.replace(/[^a-z0-9_]/gi, '');
    const slug = pathName ? pathName : config.defaultSlug;
    const load = async () => {
      try {
        const data = await fetch(config.url + slug);
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (error) {
        setData(undefined);
      }
    };

    load();
  }, [location]);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === SECTION_TWO_COLUMNS) {
          return <GridTwoColumns {...section} key={key} />;
        }
        if (component === SECTION_CONTENT) {
          return <GridContent {...section} key={key} />;
        }
        if (component === SECTION_GRID_TEXT) {
          return <GridText {...section} key={key} />;
        }
        if (component === SECTION_GRID_IMAGE) {
          return <GridImage {...section} key={key} />;
        }
      })}
    </Base>
  );
}

export default Home;
