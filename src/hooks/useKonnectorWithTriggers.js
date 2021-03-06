import { useClient, Q } from 'cozy-client'
import CozyRealtime from 'cozy-realtime'
import { useEffect, useState } from 'react'
import { TRIGGERS_DOCTYPE, KONNECTORS_DOCTYPE } from 'src/doctypes'
import get from 'lodash/get'

const useKonnectorWithTriggers = slug => {
  const client = useClient()
  const [isFetching, setIsFetching] = useState(true)
  const [triggers, setTriggers] = useState([])
  const [konnector, setKonnector] = useState({})

  useEffect(() => {
    async function load() {
      const [konnector, triggers] = await Promise.all([
        getKonnector(client, slug),
        getTriggers(client, slug)
      ])
      setKonnector(konnector)
      setTriggers(triggers)
      setIsFetching(false)
    }
    load()
  }, [client, slug])

  useEffect(() => {
    const realtime = new CozyRealtime({ client })
    realtime.subscribe('created', TRIGGERS_DOCTYPE, onTriggerCreated)
    function onTriggerCreated(trigger) {
      if (get(trigger, 'message.konnector') === slug) {
        setTriggers([...triggers, trigger])
      }
    }
    return function cleanUp() {
      if (realtime) {
        realtime.unsubscribeAll()
      }
    }
  }, [client, slug, triggers])

  const konnectorWithTriggers = {
    ...konnector,
    triggers: { data: triggers }
  }
  return { konnectorWithTriggers, fetching: isFetching }
}

function isKonnectorTrigger(doc) {
  return (
    doc._type === TRIGGERS_DOCTYPE && !!doc.message && !!doc.message.konnector
  )
}

async function getKonnector(client, slug) {
  const result = await client.query(Q(KONNECTORS_DOCTYPE).where({ slug: slug }))
  return result.data[0]
}

async function getTriggers(client, slug) {
  const { data: allTriggers } = await client.query(
    Q(TRIGGERS_DOCTYPE).where({ worker: ['client', 'konnector'] })
  )
  return allTriggers.filter(
    trigger =>
      isKonnectorTrigger(trigger) && get(trigger, 'message.konnector') === slug
  )
}

export default useKonnectorWithTriggers
