import { Helmet } from 'react-helmet-async';
import { buildOrganizationSchema } from '@/lib/organizationSchema';

const organizationSchema = buildOrganizationSchema();

const OrganizationSchema = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
  </Helmet>
);

export default OrganizationSchema;
