import React from 'react'
import { PartnersContainer, PartnersTitleContainer , PartnersTitle, DocumentDiv} from './PartnersStyles'
import { Information, Card, Logo } from 'web3uikit'
import { Table, Tag, Avatar, Button } from 'web3uikit'
import { GrDocumentText } from "react-icons/gr"
import { BiLink, BiLike, BiUser, BiUserCheck } from "react-icons/bi"
import { FaRegHandshake } from "react-icons/fa"

const Partners = () => {

  const documents = [
    {name: 'Moralis', type: 'Web3 APIs & SDKs', downloadLink: 'https://www.moralis.io/'},
    {name: 'Polygon Labs', type: 'Layer I Blockchain', downloadLink: 'https://www.polygonlabs.us/'},
    {name: 'Andreessen Horowitz', type: 'Venture Capital Fund', downloadLink: 'https://a16z.com/'}
  ]

  if (!documents) {
      return (
          <p>Loading...</p>
      )
  }

  if (documents.length == 0) {
      return (
          <p>No documents</p>
      )
  }

  let data = []
  if (documents.length > 0) {
      for (let i = 0; i < documents.length; i++) {


          data.push([
              <FaRegHandshake size={26} theme="image"/>,
              documents[i].name,
              <Tag color="blue" text={documents[i].type}/>,
              <a href={documents[i].downloadLink} style={{ textDecoration: 'none' }} target="_blank" >
                  <Button
                      text={<>View Website &nbsp;<BiLink /></>}
                      // onClick={() => window.location.href = `${documents[i].downloadLink}`}
                  />
              </a>
          ])
      }
  }

  return (
    <>
    <PartnersTitleContainer>
      <PartnersTitle>Parters</PartnersTitle>
    </PartnersTitleContainer>
    <PartnersContainer>
      <Table
          columnsConfig="80px 3fr 2fr 2fr 80px"
          data={data}
          header={[
              '',
              <span>Partnership</span>,
              <span>Type</span>,
              <span>Website</span>,
              ''
          ]}
          isColumnSortable={[
              false,
              true,
              true,
              false
          ]}
          maxPages={3}
          noPagination
          onPageNumberChanged={function noRefCheck(){}}
          onRowClick={function noRefCheck(){}}
          pageSize={5}
      />
    </PartnersContainer>
    </>
  )
}

export default Partners