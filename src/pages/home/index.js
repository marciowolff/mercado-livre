import React, {useEffect, useState} from 'react'
import {withServices} from '../../clients'

import Container from '../@container'
import {Loading} from '../../components'
import Result from './result'
import './index.scss'

const Home = ({service, history}) => {
	const [listSearch, setListSearch] = useState([])
	const [loading, setLoading] = useState(false)
	const [isHome, setIsHome] = useState(true)
	const {location} = history
	const search = new URLSearchParams(location.search)
	const value = search.get('search')

	useEffect(() => {
		if (!value) {
			history.push('/')
			return
		}

		setIsHome(false)
		callSearch(value)
	}, [])

	const callSearch = (value) => {
		setLoading(true)
		service.mercadoLivreAPI.search.get(value).then(({results}) => {
			setListSearch(results)
			setLoading(false)
		}).catch(() => {
			setLoading(false)
		})
	}

	const handleSearch = (value) => {
		history.push(`items?search=${value}`)

		callSearch(value)
	}

	const breadcrumb = isHome ? [] : [{ label: 'home', url: '/' }, { label: 'pesquisa' }]

	return (
		<Container
			id="home"
			history={history}
			searchValue={value}
			searchSubmit={handleSearch}
			hideMain={isHome}
			breadcrumb={breadcrumb}
		>
			<Loading show={loading} />

			{!isHome && (
				<> 
					{!loading && listSearch.length === 0 && (
						<p id="messageNotResult" className="text--h1">
							Não encontramos resultados pra essa busca
						</p>
					)}
					{!loading && listSearch.length > 0 && (
						<Result items={listSearch} history={history} />
					)}
				</>
			)}
			
		</Container>
	)
}

export default withServices(Home)
