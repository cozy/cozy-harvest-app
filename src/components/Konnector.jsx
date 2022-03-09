import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import get from 'lodash/get'

import { useClient, Q } from 'cozy-client'
import { Routes as HarvestRoutes } from 'cozy-harvest-lib'

import { KONNECTORS_DOCTYPE, TRIGGERS_DOCTYPE } from 'src/doctypes'

const isKonnectorTrigger = doc => {
  return (
    doc._type === TRIGGERS_DOCTYPE && !!doc.message && !!doc.message.konnector
  )
}

const getAllKonnectors = async (client, konnectorSlug) => {
  return await client.query(
    Q(KONNECTORS_DOCTYPE).where({ slug: konnectorSlug })
  )
}

const getAllTriggers = async client => {
  return await client.query(
    Q(TRIGGERS_DOCTYPE).where({ worker: ['client', 'konnector'] })
  )
}

export const Konnector = () => {
  const { konnectorSlug } = useParams()
  const history = useHistory()
  const client = useClient()
  const [state, setState] = useState({
    fetching: true,
    allTriggers: [],
    konnector: {}
  })

  useEffect(() => {
    ;(async () => {
      const { data: konnectors } = await getAllKonnectors(client, konnectorSlug)
      const { data: allTriggers } = await getAllTriggers(client)

      setState({
        fetching: false,
        allTriggers,
        konnector: konnectors?.[0] || {}
      })
    })()
  }, [client, konnectorSlug])

  const triggersData = Object.values(state.allTriggers).reduce(
    (acc, document) => {
      if (
        isKonnectorTrigger(document) &&
        get(document, 'message.konnector') === konnectorSlug
      ) {
        acc.push(document)
      }
      return acc
    },
    []
  )

  const konnectorWithTriggers = {
    ...state.konnector,
    triggers: { data: triggersData }
  }

  if (state.fetching) {
    return <p>Loading</p>
  } else {
    return (
      <HarvestRoutes
        konnectorRoot={`/connected/${state.konnector?.slug}`}
        konnector={konnectorWithTriggers}
        onDismiss={() => history.push('/connected')}
        datacardOptions={null}
      />
    )
  }
}
