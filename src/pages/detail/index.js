import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import {withServices} from '../../clients'

import Container from '../@container'
import { Loading, Button } from '../../components'
import PhotoGallery from './photo-gallery'
import { mask } from '../../utils'
import './index.scss'

const Detail = ({service, history}) => {
	const [detail, setDetail] = useState()
	const [loading, setLoading] = useState(false)
	const { id } = useParams()

	useEffect(() => {
		if (!id) {
			history.push('/')
			return
		}
		
		callSearch(id)
	}, [])

	const callSearch = async (id) => {
		setLoading(true)
		const detail = await service.mercadoLivreAPI.product.detail(id)
		const description = await service.mercadoLivreAPI.product.description(id)

		setDetail({
			...detail,
			description
		})
		
		setLoading(false)
	}

	const breadcrumb = [
		{ label: 'home', url: '/' },
		{ label: 'pesquisa', },
		{ label: detail ? detail.title : '' }
	]

	return (
		<Container
			id="detail"
			history={history}
			breadcrumb={breadcrumb}
		>
			<Loading show={loading} />
			{!loading && detail && 
				<>
					<PhotoGallery items={detail.pictures} />
					
					<article className="details">
						<h1>{detail.title}</h1>
						<h2>{mask(detail.price, 'currency', {symbol: '$'})}</h2>
						<Button className="button--primary">Comprar</Button>
					</article>
					<footer className="description">
						<h3 className="text--h1">Descrição do produto</h3>
						<h4>{detail.description.plain_text}</h4>
					</footer>
				</>
			}
		</Container>
	)
}

export default withServices(Detail)
